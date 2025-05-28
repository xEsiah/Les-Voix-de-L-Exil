document.addEventListener("DOMContentLoaded", () => {
  const dialogueElements = document.querySelectorAll(".dialogues div");
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const darius = document.getElementById("darius");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");

  let index = 0;

  // Récupérer la classe du chapitre active
  const bodyClass = document.body.classList;
  const chapterClass = bodyClass.toString().match(/background-chapter\d+/);

  // Message de narration basé sur la classe du chapitre
  const chapterMessages = {
    "background-prologue":
      "Dans les entrailles de Noxus, deux âmes cherchent encore la lumière... Dans une arène souterraine, Azhari et Lysandor échappent à l’ombre de la mort et cherchent une route vers la liberté. L'espoir brille faiblement sous les cendres de ce monde déchu.",
    "background-chapter1":
      "Le soleil se lève sur le Bastion Immortel, une forteresse où les chaînes et la sueur façonnent les destinées. Azhari et Lysandor s'échappent, mais la route vers la liberté est semée d'embûches, et Darius les attend à chaque coin de rue.",
    "background-chapter2":
      "Les Terres Déchirées s'étendent à perte de vue, un désert où règnent les chasseurs de primes et les révoltés. Azhari et Lysandor, traqués par Noxus, se retrouvent confrontés à des choix impossibles, entre alliés et traîtres.",
    "background-chapter3":
      "Zaun, l'enfer sous Piltover, où la loi du plus fort est de mise. Azhari et Lysandor se trouvent pris dans les machinations de Sevika, bras droit de Silco. Leurs vies sont désormais en jeu dans un univers où rien n’est jamais ce qu'il semble être.",
    "background-chapter4":
      "Piltover, la cité de la lumière, mais aussi de la discorde. Après avoir traversé des terres dévastées et des villes souterraines, Azhari et Lysandor doivent choisir leur place dans un monde où la politique, la richesse et le pouvoir règnent en maîtres. Leurs choix détermineront leur destin final.",
  };

  // Affichage du message de narration personnalisé pour chaque chapitre
  const narrationText =
    chapterMessages[chapterClass ? chapterClass[0] : "default"] ||
    "Dans un monde de ténèbres, la lumière n'est jamais loin...";

  showNarration(narrationText, 4000, () => {
    const sprites = document.querySelectorAll(".sprite");
    sprites.forEach((el) => el.classList.remove("invisible-init"));
    button.classList.remove("invisible-init");

    setTimeout(() => {
      sprites.forEach((el) => el.classList.add("fade-in"));
      button.classList.add("fade-in");
    }, 50);
  });

  // Fonction pour afficher la narration
  function showNarration(text, duration = 3000, callback = null) {
    const box = document.getElementById("narration-box");
    const textElement = document.getElementById("narration-text");

    textElement.textContent = text;
    box.classList.add("show");

    setTimeout(() => {
      box.classList.remove("show");
      document.querySelectorAll(".invisible-init").forEach((el) => {
        el.classList.remove("invisible-init");
      });
      if (callback) callback();
    }, duration);
  }

  // Fonction pour surbrillance du locuteur
  function highlightSpeakerFromDialogue() {
    azhari.classList.remove("active-speaker", "move-left", "move-right");
    lysandor.classList.remove("active-speaker", "move-left", "move-right");
    if (darius)
      darius.classList.remove(
        "active-speaker",
        "move-left",
        "move-right",
        "visible"
      );

    dialogueBox.classList.remove("dialogue-left", "dialogue-right");

    const strongEl = dialogueBox.querySelector("strong");
    if (strongEl) {
      let firstWord = strongEl.textContent.split(":")[0].trim().toLowerCase();
      if (firstWord === "azhari") {
        azhari.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-left");
      } else if (firstWord === "lysandor") {
        lysandor.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-right");
      } else if (
        firstWord === "darius" &&
        chapterClass &&
        chapterClass[0] !== "background-prologue"
      ) {
        darius.classList.add("active-speaker", "visible");
        dialogueBox.classList.add("dialogue-left");
      }
    }
  }

  // Fonction pour passer au dialogue suivant
  window.nextDialogue = function () {
    if (index < dialogues.length) {
      dialogueBox.innerHTML = dialogues[index];
      highlightSpeakerFromDialogue();
      index++;

      if (index === dialogues.length) {
        button.textContent = "Continuer";
        button.classList.remove("cta-button-dialogue");
        button.classList.add("end-button");

        button.onclick = null;
        button.addEventListener("click", () => {
          const currentPath = window.location.pathname;
          const match = currentPath.match(/(chapter)(\d+)/i);

          if (match) {
            const currentChapNum = parseInt(match[2], 10);
            const nextChapNum = currentChapNum + 1;

            // Reconstruit le chemin avec chapterX
            const nextChapUrl = currentPath.replace(
              /chapter\d+/i,
              `chapter${nextChapNum}`
            );

            // Redirige
            window.location.href = nextChapUrl;
          } else {
            window.location.href =
              "/Les-Voix-De-L-Exil/public/chapter2/index.php";
          }
        });
      }
    }
  };

  // Ajouter un événement au bouton pour avancer le dialogue
  button.addEventListener("click", nextDialogue);
});
