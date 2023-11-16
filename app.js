// Programs Section

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

// Testimonials Section
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
