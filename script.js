(() => {
  'use strict';

  /*----------------------------------------
    Constants & Element References
  ----------------------------------------*/
  const THEME_KEY      = 'theme';
  const themeSwitch    = document.querySelector('.theme-switch input[type="checkbox"]');
  const loadingScreen  = document.getElementById('loading');
  const fadeElements   = document.querySelectorAll('.fade-in');
  const OBSERVER_OPTS  = { threshold: 0.1 };

  /*----------------------------------------
    Theme Management
  ----------------------------------------*/
  const applyTheme = theme => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
  };

  const initTheme = () => {
    const saved       = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current     = saved || (prefersDark ? 'dark' : 'light');

    themeSwitch.checked = current === 'dark';
    applyTheme(current);
  };

  themeSwitch.addEventListener('change', e => {
    applyTheme(e.target.checked ? 'dark' : 'light');
  });

  /*----------------------------------------
    Fade‐In on Scroll
  ----------------------------------------*/
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add('visible');
        observer.unobserve(target);
      }
    });
  }, OBSERVER_OPTS);

  const initFadeIn = () => {
    fadeElements.forEach(el => fadeObserver.observe(el));
  };

  /*----------------------------------------
    Loading Screen Removal
  ----------------------------------------*/
  window.addEventListener('load', () => {
    if (loadingScreen) {
      loadingScreen.classList.add('loaded');
      setTimeout(() => loadingScreen.remove(), 300);
    }
    initFadeIn();
  });

  /*----------------------------------------
    Initialization
  ----------------------------------------*/
  initTheme();
})();
