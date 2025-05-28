document.addEventListener("DOMContentLoaded", () => {
    const dialogueElements = document.querySelectorAll(".dialogues div");
    const dialogues = Array.from(dialogueElements).map(el => el.innerHTML);

<<<<<<< Updated upstream
  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");
=======
    const azhari = document.getElementById("azhari");
    const lysandor = document.getElementById("lysandor");
    const darius = document.getElementById("darius");
    const dialogueBox = document.getElementById("dialogueBox");
>>>>>>> Stashed changes

    let index = 0;

    function highlightSpeakerFromDialogue() {
        azhari.classList.remove("active-speaker", "move-left", "move-right");
        lysandor.classList.remove("active-speaker", "move-left", "move-right");
        darius.classList.remove("active-speaker", "move-left", "move-right");
        darius.classList.remove("visible");
        dialogueBox.classList.remove("dialogue-left", "dialogue-right");

<<<<<<< Updated upstream
    const strongEl = dialogueBox.querySelector("strong");
    if (strongEl) {
      let firstWord = strongEl.textContent.split(":")[0].trim().toLowerCase();
      if (firstWord === "azhari") {
        azhari.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-left");
      } else if (firstWord === "lysandor") {
        lysandor.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-right");
      }
=======
        const text = dialogueBox.textContent.toLowerCase();

        // Contrôle des positions selon l'index du dialogue
        if (index === 0) {
            // Azhari à gauche
            azhari.classList.add("active-speaker", "move-left");
            dialogueBox.classList.add("dialogue-left");
        } else if (index === 1) {
            // Lysandor à droite
            lysandor.classList.add("active-speaker", "move-right");
            dialogueBox.classList.add("dialogue-right");
        } else if (index === 2) {
            // Azhari passe à droite
            azhari.classList.add("active-speaker", "move-right");
            dialogueBox.classList.add("dialogue-right");
        } else if (index >= 3) {
            // Darius arrive à gauche, Azhari et Lysandor sont à droite
            darius.classList.add("active-speaker", "move-left", "visible");
            azhari.classList.add("move-right");
            lysandor.classList.add("move-right");
            dialogueBox.classList.add("dialogue-left");
        }
>>>>>>> Stashed changes
    }

<<<<<<< Updated upstream
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
            // Fallback au cas où l'URL ne contient pas "chapterX"
            window.location.href =
              "/Les-Voix-De-L-Exil/public/chapter2/index.php";
          }
        });
      }
    }
  };

  showNarration(
    "Dans les entrailles de Noxus, deux âmes cherchent encore la lumière...",
    4000,
    () => {
      const sprites = document.querySelectorAll(".sprite");
      sprites.forEach((el) => el.classList.remove("invisible-init"));
      button.classList.remove("invisible-init");

      setTimeout(() => {
        sprites.forEach((el) => el.classList.add("fade-in"));
        button.classList.add("fade-in");
      }, 50);
    }
  );
=======
    window.nextDialogue = function () {
        if (index < dialogues.length) {
            dialogueBox.innerHTML = dialogues[index];
            highlightSpeakerFromDialogue();
            index++;
        }
    };
>>>>>>> Stashed changes
});
