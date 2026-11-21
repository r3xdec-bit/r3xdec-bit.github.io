
/* sticky stacking: scroll-driven, no timers */
(() => {
  const content = document.querySelector('.content'); if (!content) return;
  const sheets = [...content.children].filter(e => (e.tagName === 'SECTION' || e.tagName === 'FOOTER') && getComputedStyle(e).display !== 'none');
  if (sheets.length < 2) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const shades = sheets.slice(0, -1).map(el => { const d = document.createElement('div'); d.className = 'stack-shade'; d.setAttribute('aria-hidden', 'true'); el.appendChild(d); return d; });
  let vh = innerHeight, tops = [], raf = 0;
  const layout = () => {
    vh = innerHeight;
    tops = sheets.map(el => Math.min(0, vh - el.offsetHeight));
    sheets.forEach((el, i) => el.style.setProperty('--stick-top', tops[i] + 'px'));
    frame();
  };
  const frame = () => {
    raf = 0;
    for (let i = 0; i < sheets.length - 1; i++) {
      const el = sheets[i], next = sheets[i + 1].getBoundingClientRect().top;
      // 0 while the next sheet is below the screen, 1 once it has covered it
      const p = Math.min(1, Math.max(0, 1 - next / vh));
      const k = reduced.matches ? 0 : p * p * (3 - 2 * p);
      const key = k.toFixed(3);
      if (el._k === key) continue;
      el._k = key;
      if (k <= 0) { el.style.transform = ''; el.classList.remove('is-stacking'); }
      else {
        el.classList.add('is-stacking');
        el.style.transformOrigin = `50% ${(-tops[i] + vh * 0.5).toFixed(0)}px`;
        el.style.transform = `scale(${(1 - 0.06 * k).toFixed(4)})`;
      }
      shades[i].style.opacity = (0.3 * k).toFixed(3);
    }
  };
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(frame); }, { passive: true });
  addEventListener('resize', layout, { passive: true });
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(() => layout()); sheets.forEach(el => ro.observe(el)); }
  addEventListener('load', layout);
  layout();
})();
