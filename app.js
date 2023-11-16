const cards = document.querySelectorAll(".program-card");
const btns = document.querySelectorAll(".programs-li");
const container = document.querySelector(".programs-container");

let activeProgram = "fsw-card";
let activeBtn = "fsw";

function changeProgram(id, color) {
  let cardId = id + "-card";

  if (cardId == activeProgram) return;
  cards.forEach((card) => {
    if (card.id === activeProgram) {
      card.classList.add("hide");
      card.classList.remove("show");
    } else if (card.id === cardId) {
      card.classList.remove("hide");
      card.classList.add("show");
    }
  });

  btns.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("active");
      btn.classList.add(color + "-text");
      container.className = "programs-container";
      container.classList.add(color + "-bg");
    } else if (btn.id === activeBtn) {
      btn.className = "programs-li";
    }
  });

  activeBtn = id;
  activeProgram = cardId;
}
