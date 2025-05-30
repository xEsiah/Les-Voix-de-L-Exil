document.addEventListener("DOMContentLoaded", () => {
  const dialogueElements = document.querySelectorAll(".dialogues div");
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const darius = document.getElementById("darius");
  const contrebandier = document.getElementById("contrebandier");
  const nika = document.getElementById("nika");
  const teeva = document.getElementById("teeva");
  const dialogueBox = document.getElementById("dialogueBox");
  const button = document.getElementById("cta-button");

  let index = 0;
  let nombreClick = 0;

  const bodyClass = document.body.classList;
  const chapterClass = bodyClass.toString().match(/background-chapter\d+/);
  const showFormAtEnd =
    (chapterClass && chapterClass[0] === "background-chapter3") ||
    (chapterClass && chapterClass[0] === "background-chapter2") ||
    (chapterClass && chapterClass[0] === "background-chapter1");

  let clickTrigger = 2;
  if (chapterClass && chapterClass[0] === "background-chapter3") {
    if (window.location.pathname.includes("chapter3/answer.php")) {
      clickTrigger = azhariAlive ? Infinity : 19;
    } else {
      clickTrigger = azhariAlive ? 2 : 1;
    }
  }

  const chapterMessages = {
    "background-chapter0":
      "Dans les tribunes sombres de l’arène, l’odeur du sang flotte encore...",

    "background-chapter1": (() => {
      if (typeof goodAnswer !== "undefined") {
        if (goodAnswer === true) {
          return "Darius semble surpris par cette réponse. Marcus est une figure respectée. Peut-être que cela les sauvera…";
        } else {
          return "Le regard de Darius se durcit. Il ne semble pas croire un mot de leur justification. La fuite devient inévitable.";
        }
      }
      return "Dans les ruelles du Bastion Immortel, Azhari et Lysandor glissent entre les ombres. La garde sommeille. Trop facile...";
    })(),
    "background-chapter2":
      "Sous le vent sec de Drazhan, la capitale de Noxus s’efface. Devant eux, une plaine désertique... et derrière, un empire qu’ils ont défié refusant de les laisser fuir.",
    "background-chapter3":
      "Zaun, l'enfer sous Piltover, où la loi du plus fort est de mise.",
    "background-chapter4":
      "Piltover, la cité de la lumière, mais aussi de la discorde.",
  };

  const narrationText =
    chapterMessages[chapterClass ? chapterClass[0] : "default"] ||
    "Dans un monde de ténèbres, la lumière n'est jamais loin...";

  showNarration(narrationText, 500, () => {
    document
      .querySelectorAll(".sprite")
      .forEach((el) => el.classList.remove("invisible-init"));
    button.classList.remove("invisible-init");

    setTimeout(() => {
      document
        .querySelectorAll(".sprite")
        .forEach((el) => el.classList.add("fade-in"));
      button.classList.add("fade-in");
      nextDialogue();
    }, 50);
  });

  function showNarration(text, duration = 500, callback = null) {
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
    // Révélations selon chapitre et clic
    if (
      chapterClass &&
      chapterClass[0] === "background-chapter1" &&
      nombreClick === clickTrigger
    ) {
      azhari.src = "../images/AzhariShen.png";
      azhari.classList.remove(
        "sprite-left",
        "sprite-right",
        "sprite-right-right"
      );
      azhari.classList.add("sprite-right-right");

      if (darius) {
        darius.classList.remove("hidden");
        darius.classList.add("reveal");
      }
    }

    if (
      chapterClass &&
      chapterClass[0] === "background-chapter2" &&
      nombreClick === clickTrigger
    ) {
      azhari.src = "../images/AzhariShen.png";
      azhari.classList.remove(
        "sprite-left",
        "sprite-right",
        "sprite-right-right"
      );
      azhari.classList.add("sprite-right-right");

      if (contrebandier) {
        contrebandier.classList.remove("hidden");
        contrebandier.classList.add("reveal");
      }
    }

    if (
      chapterClass &&
      chapterClass[0] === "background-chapter3" &&
      nombreClick === clickTrigger
    ) {
      const isAnswerPage = window.location.pathname.includes(
        "chapter3/answer.php"
      );

      if (azhariAlive) {
        lysandor.src = "../images/LysandorDuCouteau.png";
        lysandor.classList.remove(
          "sprite-left",
          "sprite-right",
          "sprite-right-right"
        );
        lysandor.classList.add("sprite-right-right");

        if (nika) {
          nika.classList.remove("hidden");
          nika.classList.add("reveal");
        }
      } else {
        lysandor.src = "../images/LysandorDuCouteauReversed.png";
        lysandor.classList.remove(
          "sprite-right",
          "sprite-left",
          "sprite-right-right"
        );
        lysandor.classList.add("sprite-left");

        if (teeva) {
          teeva.classList.remove("hidden");
          teeva.classList.add("reveal");
        }

        if (isAnswerPage && nika) {
          nika.classList.remove("hidden");
          nika.classList.add("reveal");
          teeva.classList.remove(
            "sprite-left",
            "sprite-right",
            "sprite-right-right"
          );
          teeva.classList.add("sprite-right-right");
        }
      }
    }

    const characters = {
      azhari,
      lysandor,
      darius,
      contrebandier,
      nika,
      teeva,
    };

    Object.values(characters).forEach((el) => {
      if (el) el.classList.remove("active-speaker");
    });
    dialogueBox.classList.remove("dialogue-left", "dialogue-right");

    const strongEl = dialogueBox.querySelector("strong");
    if (!strongEl) return;

    const speaker = strongEl.textContent.split(":")[0].trim().toLowerCase();
    const characterEl = characters[speaker];

    if (characterEl) {
      characterEl.classList.add("active-speaker");

      const isRight =
        characterEl.classList.contains("sprite-right") ||
        characterEl.classList.contains("sprite-right-right");

      dialogueBox.classList.add(isRight ? "dialogue-right" : "dialogue-left");
    }
  }

  function nextDialogue() {
    if (index < dialogues.length) {
      dialogueBox.innerHTML = dialogues[index];
      highlightSpeakerFromDialogue();

      index++;
      nombreClick++;

      if (index === dialogues.length && showFormAtEnd) {
        const form = document.getElementById("choice-form");
        if (form) {
          form.classList.add("visible", "fade-in");
          button.style.display = "none";
          form.style.display = "block";
        }

        button.textContent = goodAnswer === true ? "S'échapper !" : "Fuir…";

        button.onclick = () => {
          const form = document.createElement("form");
          form.method = "POST";

          if (window.location.pathname.includes("chapter3/index.php")) {
            form.action = "../chapter3/answer.php";
          } else {
            form.action = "../chapter2/index.php";
          }

          const inputGoodAnswer = document.createElement("input");
          inputGoodAnswer.type = "hidden";
          inputGoodAnswer.name = "good_answer";
          inputGoodAnswer.value = goodAnswer;
          form.appendChild(inputGoodAnswer);

          const inputNikas = document.createElement("input");
          inputNikas.type = "hidden";
          inputNikas.name = "nikas_offer";
          inputNikas.value = "";
          form.appendChild(inputNikas);

          document.body.appendChild(form);
          form.submit();
        };
      }
    }
  }

  button.addEventListener("click", () => {
    if (index < dialogues.length) {
      nextDialogue();
    } else if (!showFormAtEnd) {
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
        window.location.href = "/Les-Voix-De-L-Exil/public/chapter2/index.php";
      }
    }
  });
});
