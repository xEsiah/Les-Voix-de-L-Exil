document.addEventListener("DOMContentLoaded", () => {
  const dialogueElements = document.querySelectorAll(".dialogues div");
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const darius = document.getElementById("darius");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");

  let index = 0;

  // Récupère la classe du chapitre active (ex: background-chapter1)
  const bodyClass = document.body.classList;
  const chapterClass = bodyClass.toString().match(/background-chapter\d+/);

  // Messages de narration selon le chapitre
  const chapterMessages = {
    "background-prologue":
      "Dans les entrailles de Noxus, deux âmes cherchent encore la lumière...",
    "background-chapter1":
      "Le soleil se lève sur le Bastion Immortel, une forteresse où les chaînes et la sueur façonnent les destinées.",
    "background-chapter2":
      "Les Terres Déchirées s'étendent à perte de vue, un désert où règnent les chasseurs de primes et les révoltés.",
    "background-chapter3":
      "Zaun, l'enfer sous Piltover, où la loi du plus fort est de mise.",
    "background-chapter4":
      "Piltover, la cité de la lumière, mais aussi de la discorde.",
  };

  // Texte de narration selon le chapitre, ou texte par défaut
  const narrationText =
    chapterMessages[chapterClass ? chapterClass[0] : "default"] ||
    "Dans un monde de ténèbres, la lumière n'est jamais loin...";

  // Affiche la narration puis initialise l'affichage des dialogues et sprites
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

  // Affiche la narration dans la boîte correspondante
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

  // Met en surbrillance le locuteur actif selon le dialogue
  function highlightSpeakerFromDialogue() {
    [azhari, lysandor, darius].forEach((el) => {
      if (el) el.classList.remove("active-speaker");
    });
    if (dialogueBox)
      dialogueBox.classList.remove("dialogue-left", "dialogue-right");

    const strongEl = dialogueBox.querySelector("strong");
    if (!strongEl) return;

    const speaker = strongEl.textContent.split(":")[0].trim().toLowerCase();

    if (speaker === "azhari" && azhari) {
      azhari.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-left");
    } else if (speaker === "lysandor" && lysandor) {
      lysandor.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-right");
    } else if (
      speaker === "darius" &&
      darius &&
      chapterClass &&
      chapterClass[0] !== "background-prologue"
    ) {
      darius.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-left");
    }
    if (chapterClass && chapterClass[0] === 'background-chapter1' && nombreClick === 2) {
        const azhari = document.getElementById("azhari");
        console.log("bravo");

        // Changer l'image (non-reversed)
        azhari.src = "../images/AzhariShen.png";

        // Supprimer la classe `sprite-left`
        azhari.classList.remove("sprite-left");

        // Afficher Darius
        const darius = document.getElementById("darius");
        darius.classList.remove("hidden");
        darius.classList.add("reveal");

        // Ajouter `sprite-right`
        azhari.classList.add("sprite-right");
    }
  }

  // Affiche le dialogue suivant ou redirige à la fin
  function nextDialogue() {
    nombreClick ++;
    console.log(nombreClick)
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

  let nombreClick = 0;
  button.addEventListener("click", nextDialogue);
});
