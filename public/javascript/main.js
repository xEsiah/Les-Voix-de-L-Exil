// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les <div> enfants de l'élément .dialogues (chaque div contient un dialogue)
  const dialogueElements = document.querySelectorAll(".dialogues div");

  // Crée un tableau contenant le contenu HTML de chaque dialogue
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  // Récupère les références aux éléments HTML des personnages et de la boîte de dialogue
  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const darius = document.getElementById("darius");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");

  // Initialise l’index du dialogue courant
  let index = 0;

  // Fonction qui identifie le personnage qui parle et applique les styles correspondants
  function highlightSpeakerFromDialogue() {
    // Supprime les styles actifs précédemment appliqués
    azhari.classList.remove("active-speaker");
    lysandor.classList.remove("active-speaker");
    darius.classList.remove("active-speaker");
    dialogueBox.classList.remove("dialogue-left", "dialogue-right");

    // Cherche la balise <strong> pour identifier le locuteur (ex: <strong>Azhari :</strong>)
    const strongEl = dialogueBox.querySelector("strong");

    if (strongEl) {
      // Extrait le nom avant le ":" et le met en minuscules pour comparaison
      let firstWord = strongEl.textContent.split(":")[0].trim().toLowerCase();

      // Active les classes CSS en fonction du personnage identifié
      if (firstWord === "azhari") {
        azhari.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-left");
      } else if (firstWord === "darius") {
        darius.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-left");
      } else if (firstWord === "lysandor") {
        lysandor.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-right");
      }
    }
  }

  // Fonction pour afficher une narration initiale avant le dialogue
  function showNarration(text, duration = 3000, callback = null) {
    const box = document.getElementById("narration-box");
    const textElement = document.getElementById("narration-text");

    // Affiche le texte dans la boîte de narration
    textElement.textContent = text;
    box.classList.add("show");

    // Après un délai, cache la narration et déclenche l'animation d'entrée des sprites et du bouton
    setTimeout(() => {
      box.classList.remove("show");

      // Supprime la classe "invisible-init" pour rendre les éléments visibles
      document.querySelectorAll(".invisible-init").forEach((el) => {
        el.classList.remove("invisible-init");
      });

      // Exécute le callback s'il est défini (ici pour lancer le dialogue)
      if (callback) callback();
    }, duration);
  }

  // Fonction globale pour afficher le prochain dialogue
  window.nextDialogue = function () {
    if (index < dialogues.length) {
      // Affiche le dialogue courant
      dialogueBox.innerHTML = dialogues[index];

      // Met à jour la surbrillance du personnage parlant
      highlightSpeakerFromDialogue();

      // Passe au dialogue suivant
      index++;

      // Si tous les dialogues sont terminés
      if (index === dialogues.length) {
        // Change le texte et le style du bouton
        button.textContent = "Continuer";
        button.classList.remove("cta-button-dialogue");
        button.classList.add("end-button");

        // Supprime les anciens comportements du bouton
        button.onclick = null;

        // Ajoute un nouvel événement pour passer au chapitre suivant
        button.addEventListener("click", () => {
          const currentPath = window.location.pathname;

          // Extrait "chapter" et le numéro actuel dans l'URL (ex: chapter1)
          const match = currentPath.match(/(chapter)(\d+)/i);

          if (match) {
            // Incrémente le numéro de chapitre
            const currentChapNum = parseInt(match[2], 10);
            const nextChapNum = currentChapNum + 1;

            // Crée la nouvelle URL avec le chapitre suivant
            const nextChapUrl = currentPath.replace(
              /chapter\d+/i,
              `chapter${nextChapNum}`
            );

            // Redirige vers le chapitre suivant
            window.location.href = nextChapUrl;
          } else {
            // Fallback si l'URL ne contient pas "chapterX"
            window.location.href =
              "/Les-Voix-De-L-Exil/public/chapter2/index.php";
          }
        });
      }
    }
  };

  // Affiche la narration d’introduction au chargement de la page
  showNarration(
    "Dans les entrailles de Noxus, deux âmes cherchent encore la lumière...",
    4000,
    () => {
      // Affiche les sprites et le bouton après la narration
      const sprites = document.querySelectorAll(".sprite");
      sprites.forEach((el) => el.classList.remove("invisible-init"));
      button.classList.remove("invisible-init");

      // Ajoute les animations avec un petit délai pour une transition fluide
      setTimeout(() => {
        sprites.forEach((el) => el.classList.add("fade-in"));
        button.classList.add("fade-in");
      }, 50);
    }
  );
});
