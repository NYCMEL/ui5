document.querySelectorAll('.mtk-slider').forEach(slider => {
  const wrap  = slider.closest('.mtk-slider-wrap');
  const valEl = wrap?.querySelector('.slider-val');
  const update = () => {
    if (valEl) valEl.textContent = slider.value;
    const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #0a6ed1 ${pct}%, #c5c8cd ${pct}%)`;
  };
  slider.addEventListener('input', update);
  update();
});
