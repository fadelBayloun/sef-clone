// Hero Section

document.addEventListener("DOMContentLoaded", function () {
  const sentences = ["UI/UX DESIGNER?", "SOFTWARE ENGINEER?", "DATA ENGINEER?"];

  let currentIndex = 0;
  let offset = 0;
  const sentenceElement = document.querySelector(".sentence");
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;
  const speed = 80;

  const updateSentence = () => {
    sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
  };

  const handleAnimation = () => {
    if (forwards) {
      if (offset >= sentences[currentIndex].length) {
        if (++skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else if (offset === 0) {
      forwards = true;
      currentIndex = (currentIndex + 1) % sentences.length;
    }

    if (skipCount === 0) {
      forwards ? offset++ : offset--;
    }

    updateSentence();
  };

  setInterval(handleAnimation, speed);
});

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
  setTimeout(showSlides, 3000);
}

// Faqs Section

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".show-more");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var contentContainer = button.closest(".faq-card");
      var hiddenContent = contentContainer.querySelector(".hidden-content");
      hiddenContent.style.display =
        hiddenContent.style.display === "none" ? "block" : "none";
    });
  });
});
