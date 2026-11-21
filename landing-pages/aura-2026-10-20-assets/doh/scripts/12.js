
/* header: highlight the section you are in */
(() => {
  const links = [...document.querySelectorAll('#header nav a')];
  const map = [['#box-tail', '.nav-box'], ['#collection', 'a[href="#collection"]'], ['#atelier', '.nav-story'], ['#methode', null], ['#board', '.nav-menu'], ['#rituel', null]]
    .map(([sec, link]) => ({ el: document.querySelector(sec), link: link && document.querySelector('#header nav ' + link) })).filter(m => m.el);
  let raf = 0;
  const update = () => {
    raf = 0;
    const line = innerHeight * .4; let cur = null;
    for (const m of map) if (m.el.getBoundingClientRect().top <= line) cur = m.link;
    links.forEach(a => { const on = a === cur; if ((a.getAttribute('aria-current') === 'true') !== on) on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
  };
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  update();
})();
