/* ===== Typing Animation ===== */
const typingText = ["Data Analyst", "Power BI Enthusiast", "SQL Expert"];
let typingIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 100;
let newTextDelay = 2000; // Delay between phrases
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < typingText[typingIndex].length) {
    typingElement.textContent += typingText[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    typingIndex = (typingIndex + 1) % typingText.length;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typingText.length) setTimeout(type, newTextDelay);
});


/* ===== Project Cards Fade-In on Scroll ===== */
const projectCards = document.querySelectorAll(".project-card");

function checkProjectCards() {
  const triggerBottom = window.innerHeight / 5 * 4;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkProjectCards);
checkProjectCards();


/* ===== Hamburger Menu ===== */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("toggle");
});

/* Animate hamburger bars */
hamburger.addEventListener("click", () => {
  const spans = hamburger.querySelectorAll("span");
  spans.forEach((span, index) => {
    span.classList.toggle(`span-${index+1}-active`);
  });
});


/* ===== Smooth Scroll for Anchor Links ===== */
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
