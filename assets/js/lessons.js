/* WrightOps — lesson JS: icons + flip-card keyboard a11y */
(function () {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Make flip cards focusable + announced as buttons (if the page hasn't already).
  document.querySelectorAll('.ts-flip-card[id^="tsFlip"]').forEach(function (card) {
    if (!card.hasAttribute('role')) card.setAttribute('role', 'button');
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
  });

  // Activate flip cards with Enter / Space (unless the page wires its own keyboard handler).
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var t = e.target;
    if (!t || !t.classList || !t.classList.contains('ts-flip-card')) return;
    if (t.hasAttribute('data-keyboard-wired')) return; // page handles it inline
    e.preventDefault();
    t.click();
  });
})();
