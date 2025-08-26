// projects.js

(() => {
  'use strict';

  // 1. Grab all project cards
  const cards = document.querySelectorAll('.project-card');

  // 2. Build an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add('visible');
        obs.unobserve(target);
      });
    },
    { threshold: 0.15 }
  );

  // 3. Observe each card
  cards.forEach(card => {
    // Ensure your CSS has something like
    // .project-card { opacity: 0; transform: translateY(20px); transition: all 0.5s ease; }
    // .project-card.visible { opacity: 1; transform: translateY(0); }
    observer.observe(card);
  });
})();
