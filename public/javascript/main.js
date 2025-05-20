document.addEventListener("DOMContentLoaded", () => {
  const dialogueElements = document.querySelectorAll(".dialogues div");
  const dialogues = Array.from(dialogueElements).map((el) => el.innerHTML);

  const azhari = document.getElementById("azhari");
  const lysandor = document.getElementById("lysandor");
  const dialogueBox = document.getElementById("dialogueBox");

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
        console.log("Azhari is speaking");
      } else if (firstWord === "lysandor") {
        lysandor.classList.add("active-speaker");
        dialogueBox.classList.add("dialogue-right");
        console.log("Lysandor is speaking");
      }
    }
  }

  window.nextDialogue = function () {
    if (index < dialogues.length) {
      dialogueBox.innerHTML = dialogues[index];
      highlightSpeakerFromDialogue();
      index++;
    }
  };
});
