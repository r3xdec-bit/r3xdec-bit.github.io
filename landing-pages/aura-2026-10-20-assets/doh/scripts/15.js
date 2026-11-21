
/* footer newsletter: front-end only for now (shows a thank-you; connect it to your mailing service) */
(() => {
  const f = document.querySelector('.f-form'); if (!f) return;
  const input = f.querySelector('input'), thanks = document.querySelector('.f-thanks');
  f.addEventListener('submit', e => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    f.classList.toggle('bad', !ok);
    if (!ok) { input.focus(); return; }
    f.hidden = true; thanks.hidden = false;
  });
  document.querySelector('.f-top')?.addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); });
})();
