(function () {
  var btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
  function close() { if (menu) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } }
  if (btn && menu) {
    btn.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', menu.classList.toggle('open'));
    });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
  // Highlight the nav link for the section currently in view
  var links = Array.prototype.slice.call(document.querySelectorAll('#menu a[href^="#"]'));
  if ('IntersectionObserver' in window && links.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
  }
})();
