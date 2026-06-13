/**
 * Africand Consulting — main.js
 * Common scripts: language switcher, burger menu, nav scroll, scroll reveal
 */
(function () {
  'use strict';

  // ── Language switcher ────────────────────────────────────────────────────
  function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-en]').forEach(function (el) {
      el.innerHTML = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });
    var langEl = document.querySelector('.lang-current');
    if (langEl) langEl.textContent = lang.toUpperCase();
  }

  window.toggleLang = function () {
    var current = localStorage.getItem('lang') || 'en';
    setLang(current === 'en' ? 'fr' : 'en');
  };

  // Restore saved language on load
  var saved = localStorage.getItem('lang') || 'en';
  if (saved === 'fr') setLang('fr');

  // ── Burger menu ──────────────────────────────────────────────────────────
  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.getElementById('navLinks').classList.toggle('open');
    });
  }

  // ── Nav: transparent → solid on scroll ──────────────────────────────────
  var nav = document.querySelector('nav');
  if (nav) {
    function updateNav() {
      nav.classList.toggle('nav--solid', window.scrollY > 40);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ── Scroll reveal (IntersectionObserver) ────────────────────────────────
  var revealSelectors = [
    '[data-reveal]',
    '.method-step', '.value-col', '.insight-item',
    '.profile-lead', '.profile-secondary',
    '.desc-section', '.criteria-item', '.position-item',
    '.transaction-item', '#statementEl',
    '[id^="stat"]', '[id^="icard"]', '[id^="ds"]',
    '#expLabel', '#refEl', '#partnerEl',
    '#insightsHeader', '#latestTxEl', '#careersEl',
    '#differenceEl', '#stmtEl'
  ].join(', ');

  var reveals = document.querySelectorAll(revealSelectors);
  if (reveals.length && 'IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, i * 100);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { revealObs.observe(el); });
  }

})();
