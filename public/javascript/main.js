document.addEventListener("DOMContentLoaded", () => {
  const dialogueElements = document.querySelectorAll(".dialogues div");
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");

  let index = 0;

  function highlightSpeakerFromDialogue() {
    azhari.classList.remove("active-speaker");
    lysandor.classList.remove("active-speaker");
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
      }
    }
  }

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
});
