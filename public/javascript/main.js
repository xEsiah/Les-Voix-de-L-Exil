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

    const text = dialogueBox.textContent.toLowerCase();

    if (text.includes("azhari")) {
      azhari.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-left");
    } else if (text.includes("lysandor")) {
      lysandor.classList.add("active-speaker");
      dialogueBox.classList.add("dialogue-right");
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
