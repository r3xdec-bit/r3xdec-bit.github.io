
/* jelly letters on the footer DOH! (the drop-in stays on the outer letter, the wobble on an inner one) */
(() => {
  const el = document.querySelector('footer .footer-wordmark'); if (!el) return;
  const outer = el.querySelectorAll('span').length ? [...el.querySelectorAll('span')] : (() => { el.innerHTML = [...el.textContent].map(c => `<span>${c}</span>`).join(''); return [...el.querySelectorAll('span')]; })();
  outer.forEach(sp => {
    const j = document.createElement('i'); j.className = 'jl'; j.textContent = sp.textContent; sp.textContent = ''; sp.appendChild(j);
    const wobble = () => { if (j.classList.contains('wob')) return; j.classList.add('wob'); };
    j.addEventListener('animationend', () => j.classList.remove('wob'));
    sp.addEventListener('pointerenter', wobble);
    sp.addEventListener('pointerdown', wobble);
  });
})();
