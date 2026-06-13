/**
 * contact.js — Async form submission via Formspree
 */
(function () {
  'use strict';
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if (!name || !email || !message) return;

    var btn = form.querySelector('.btn-submit');
    btn.disabled = true;

    try {
      var res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, message: message })
      });
      if (res.ok) {
        form.style.display = 'none';
        document.getElementById('formSuccess').classList.add('visible');
      } else {
        btn.disabled = false;
        alert('An error occurred. Please email us at contact@africand.com');
      }
    } catch (err) {
      btn.disabled = false;
      alert('Network error. Please email us at contact@africand.com');
    }
  });
})();
