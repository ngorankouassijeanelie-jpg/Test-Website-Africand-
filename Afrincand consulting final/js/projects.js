/**
 * projects.js — Transaction filter (projects page only)
 */
(function () {
  'use strict';
  var filterBtns = document.querySelectorAll('.filter-btn');
  var txItems = document.querySelectorAll('.transaction-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      txItems.forEach(function (item) {
        var show = filter === 'all' || item.dataset.category === filter;
        item.style.display = show ? 'grid' : 'none';
        if (show) setTimeout(function () { item.classList.add('visible'); }, 60);
      });
    });
  });
})();
