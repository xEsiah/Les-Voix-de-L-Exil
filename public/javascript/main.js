document.addEventListener("DOMContentLoaded", () => {
  const dialogueElements = document.querySelectorAll(".dialogues div");
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const darius = document.getElementById("darius");
  const contrebandier = document.getElementById("contrebandier");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");

  let index = 0;
  let nombreClick = 0;

  const bodyClass = document.body.classList;
  const chapterClass = bodyClass.toString().match(/background-chapter\d+/);

  const chapterMessages = {
    "background-chapter0":
      "Dans les tribunes sombres de l’arène, l’odeur du sang flotte encore. Azhari et Lysandor avancent, furtifs parmi les chaînes et les ombres.",
    "background-chapter1":
      "Dans les ruelles du Bastion Immortel, Azhari et Lysandor glissent entre les ombres. La garde sommeille. Trop facile...",
    "background-chapter2":
      "Sous le vent sec de Drazhan, les bastions de Noxus s’effacent. Devant eux, un désert rouge murmure les ordres d’un empire qui refuse de les laisser fuir.",
    "background-chapter3":
      "Zaun, l'enfer sous Piltover, où la loi du plus fort est de mise.",
    "background-chapter4":
      "Piltover, la cité de la lumière, mais aussi de la discorde.",
  };

  const narrationText =
    chapterMessages[chapterClass ? chapterClass[0] : "default"] ||
    "Dans un monde de ténèbres, la lumière n'est jamais loin...";

  showNarration(narrationText, 4000, () => {
    document
      .querySelectorAll(".sprite")
      .forEach((el) => el.classList.remove("invisible-init"));
    button.classList.remove("invisible-init");

    setTimeout(() => {
      document
        .querySelectorAll(".sprite")
        .forEach((el) => el.classList.add("fade-in"));
      button.classList.add("fade-in");

      dialogueBox.innerHTML = dialogues[index];
      index++;
      setTimeout(highlightSpeakerFromDialogue, 10);
    }, 50);
  });

  function showNarration(text, duration = 3000, callback = null) {
    const box = document.getElementById("narration-box");
    const textElement = document.getElementById("narration-text");

    textElement.textContent = text;
    box.classList.add("show");

    setTimeout(() => {
      box.classList.remove("show");
      document
        .querySelectorAll(".invisible-init")
        .forEach((el) => el.classList.remove("invisible-init"));
      if (callback) callback();
    }, duration);
  }

  function highlightSpeakerFromDialogue() {
    // Étape 1 : Appliquer les effets de chapitre selon nombreClick
    if (
      chapterClass &&
      chapterClass[0] === "background-chapter1" &&
      nombreClick === 2
    ) {
      azhari.src = "../images/AzhariShen.png";
      azhari.classList.remove(
        "sprite-left",
        "sprite-right",
        "sprite-right-right"
      );
      azhari.classList.add("sprite-right-right");

      darius.classList.remove("hidden");
      darius.classList.add("reveal");
    }

    if (
      chapterClass &&
      chapterClass[0] === "background-chapter2" &&
      nombreClick === 2
    ) {
      azhari.src = "../images/AzhariShen.png";
      azhari.classList.remove(
        "sprite-left",
        "sprite-right",
        "sprite-right-right"
      );
      azhari.classList.add("sprite-right-right");

      contrebandier.classList.remove("hidden");
      contrebandier.classList.add("reveal");
    }

    // Étape 2 : Mise à jour des classes d'affichage du dialogue
    [azhari, lysandor, darius, contrebandier].forEach((el) => {
      if (el) el.classList.remove("active-speaker");
    });
    if (dialogueBox)
      dialogueBox.classList.remove("dialogue-left", "dialogue-right");

    const strongEl = dialogueBox.querySelector("strong");
    if (!strongEl) return;

    const speaker = strongEl.textContent.split(":")[0].trim().toLowerCase();
    console.log("Speaker:", speaker);

    if (speaker === "azhari" && azhari) {
      azhari.classList.add("active-speaker");
      if (azhari.classList.contains("sprite-right-right")) {
        dialogueBox.classList.add("dialogue-right");
      } else {
        dialogueBox.classList.add("dialogue-left");
      }
    } else if (speaker === "lysandor" && lysandor) {
      lysandor.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-right");
    } else if (speaker === "darius" && darius) {
      darius.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-left");
    } else if (speaker === "contrebandier" && contrebandier) {
      contrebandier.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-left");
    }
  }

  function nextDialogue() {
    nombreClick++; // D'abord incrémenter
    console.log(nombreClick);

    if (index < dialogues.length) {
      dialogueBox.innerHTML = dialogues[index];
      setTimeout(highlightSpeakerFromDialogue, 10);
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
            const nextChapUrl = currentPath.replace(
              /chapter\d+/i,
              `chapter${nextChapNum}`
            );
            window.location.href = nextChapUrl;
          } else {
            window.location.href =
              "/Les-Voix-De-L-Exil/public/chapter2/index.php";
          }
        });
      }
    }
  }

  button.addEventListener("click", nextDialogue);
});
