
const btn = document.getElementById('open-cpop');
const pop = document.getElementById('cpop');
const swatch = document.getElementById('cpop-swatch');
const stateEl = document.getElementById('cpop-state');

btn.addEventListener('click', e => { e.stopPropagation(); pop.classList.toggle('open'); });
document.addEventListener('click', () => pop.classList.remove('open'));
pop.addEventListener('click', e => e.stopPropagation());

document.querySelectorAll('.mtk-color-palette__swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    const color = sw.style.background;
    swatch.style.background = color;
    if (stateEl) stateEl.textContent = `Selected: ${color}`;
    pop.classList.remove('open');
  });
});
