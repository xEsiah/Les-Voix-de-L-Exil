// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les <div> enfants de l'élément avec la classe .dialogues
  const dialogueElements = document.querySelectorAll(".dialogues div");

  // Transforme la NodeList en tableau contenant le HTML de chaque dialogue
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  // Récupère les éléments des personnages et de la boîte de dialogue
  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const dialogueBox = document.getElementById("dialogueBox");

  // Index du dialogue courant
  let index = 0;

  // Fonction qui détermine quel personnage parle et applique les classes CSS associées
  function highlightSpeakerFromDialogue() {
    // On enlève les styles de surbrillance précédents
    azhari.classList.remove("active-speaker");
    lysandor.classList.remove("active-speaker");
    dialogueBox.classList.remove("dialogue-left", "dialogue-right");

    // Recherche de la première balise <strong> dans le dialogue affiché
    const strongEl = dialogueBox.querySelector("strong");

    // Si une balise <strong> est trouvée, on essaie d'en extraire le nom du personnage
    if (strongEl) {
      // On récupère le texte de la balise, on isole le mot avant les ":" et on le met en minuscule
      let firstWord = strongEl.textContent.split(":")[0].trim().toLowerCase();

      // Vérification du nom, ajout des classes CSS selon le personnage
      if (firstWord === "azhari") {
        azhari.classList.add("active-speaker"); // met Azhari en surbrillance
        dialogueBox.classList.add("dialogue-left"); // place le dialogue à gauche
        console.log("Azhari is speaking");
      } else if (firstWord === "lysandor") {
        lysandor.classList.add("active-speaker"); // met Lysandor en surbrillance
        dialogueBox.classList.add("dialogue-right"); // place le dialogue à droite
        console.log("Lysandor is speaking");
      }
    }
  }

  // Fonction globale pour afficher le prochain dialogue
  window.nextDialogue = function () {
    if (index < dialogues.length) {
      // Injecte le HTML du dialogue dans la boîte
      dialogueBox.innerHTML = dialogues[index];
      // Met à jour l'affichage du personnage actif
      highlightSpeakerFromDialogue();
      // Passe au dialogue suivant pour l'appel suivant
      index++;
    }
  };
  showNarration(
    "Dans les entrailles de Noxus, deux âmes cherchent encore la lumière...",
    4000,
    () => {
      const sprites = document.querySelectorAll(".sprite");
      const button = document.querySelector(".cta-button-dialogue");

      // Supprime d’abord invisible-init pour déclencher la transition proprement
      sprites.forEach((el) => el.classList.remove("invisible-init"));
      button.classList.remove("invisible-init");

      // Ajoute ensuite fade-in (déclenche le transition)
      setTimeout(() => {
        sprites.forEach((el) => el.classList.add("fade-in"));
        button.classList.add("fade-in");
      }, 50); // petit délai pour que le navigateur applique le changement
    }
  );
});

function showNarration(text, duration = 3000, callback = null) {
  const box = document.getElementById("narration-box");
  const textElement = document.getElementById("narration-text");

  textElement.textContent = text;
  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");

    // Supprime invisible-init pour déclencher les animations existantes
    document.querySelectorAll(".invisible-init").forEach((el) => {
      el.classList.remove("invisible-init");
    });

    if (callback) callback();
  }, duration);
}
