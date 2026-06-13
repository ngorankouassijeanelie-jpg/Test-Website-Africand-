/**
 * career-page.js — File upload + form submit (shared by all job pages)
 */
(function () {
  'use strict';

  // File input: display selected filename
  function setupFileUpload(inputId, boxId, nameId) {
    var input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('change', function () {
      var nameEl = document.getElementById(nameId);
      var box    = document.getElementById(boxId);
      if (this.files && this.files[0]) {
        if (nameEl) nameEl.textContent = this.files[0].name;
        if (box)    box.classList.add('has-file');
      }
    });
  }

  setupFileUpload('cvFile', 'cvBox', 'cvName');
  setupFileUpload('clFile', 'clBox', 'clName');

  // Application form submit
  var form = document.getElementById('applyForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var wrap = document.getElementById('formWrap');
    var msg  = document.getElementById('successMsg');
    if (wrap) wrap.style.display = 'none';
    if (msg)  msg.classList.add('show');
  });
})();
