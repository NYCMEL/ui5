
document.querySelectorAll('.ui5-range-slider').forEach(rs => {
  const wrap  = rs.closest('.ui5-range-slider-wrap');
  const min   = +rs.dataset.min, max = +rs.dataset.max;
  const sIn   = rs.querySelector('.ui5-range-slider__input--start');
  const eIn   = rs.querySelector('.ui5-range-slider__input--end');
  const fill  = rs.querySelector('.ui5-range-slider__fill');
  const sLbl  = wrap?.querySelector('.rs-start');
  const eLbl  = wrap?.querySelector('.rs-end');

  [sIn, eIn].forEach(i => { i.min = min; i.max = max; });
  sIn.value = rs.dataset.start; eIn.value = rs.dataset.end;

  function update() {
    let s = +sIn.value, e = +eIn.value;
    if (s > e) { if (this === sIn) sIn.value = e; else eIn.value = s; s = +sIn.value; e = +eIn.value; }
    const sp = ((s-min)/(max-min))*100, ep = ((e-min)/(max-min))*100;
    fill.style.left = sp+'%'; fill.style.width = (ep-sp)+'%';
    const prefix = wrap?.querySelector('label')?.textContent?.includes('$') ? '$' : '';
    if (sLbl) sLbl.textContent = prefix + s;
    if (eLbl) eLbl.textContent = prefix + e;
  }

  sIn.addEventListener('input', function() { update.call(this); });
  eIn.addEventListener('input', function() { update.call(this); });
  update.call(sIn);
});
