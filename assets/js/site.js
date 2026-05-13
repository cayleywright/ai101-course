/* WrightOps — site JS (marketing pages) */
(function () {
  // 1. Lucide icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // 2. Mobile menu — enhance the <details> disclosure: close on Escape / outside click
  var menu = document.querySelector('.nav-disclosure');
  if (menu) {
    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.removeAttribute('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) {
        menu.removeAttribute('open');
        var s = menu.querySelector('summary');
        if (s) s.focus();
      }
    });
    // close after following a link
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.removeAttribute('open'); });
    });
  }

  // 3. Gentle scroll-reveal (guarded by .js on <html>; disabled under reduced motion)
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in-view'); });
  }
})();
