
/* sprinkle burst when a glaze button is pressed */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !Element.prototype.animate) return;
  const C = ['#ff7fb6', '#ffd23f', '#3d8cff', '#34c27a', '#8b5cf6', '#ff7a2f', '#fff6d6'];
  document.addEventListener('pointerdown', e => {
    const b = e.target.closest && e.target.closest('.button'); if (!b) return;
    for (let i = 0; i < 14; i++) {
      const s = document.createElement('i'), a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70, r = Math.random() * 720 - 360;
      s.className = 'glaze-pop'; s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px'; s.style.background = C[i % C.length];
      document.body.appendChild(s);
      s.animate([{ transform: 'translate(-50%,-50%) rotate(0) scale(1)', opacity: 1 },
                 { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d + 30}px)) rotate(${r}deg) scale(.6)`, opacity: 0 }],
                { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.15,.7,.3,1)' }).onfinish = () => s.remove();
    }
  }, { passive: true });
})();
