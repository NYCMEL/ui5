
const cal = document.getElementById('cal');
const stateEl = document.querySelector('.cal-state');
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let current = new Date(), selected = null;

function render() {
  const y = current.getFullYear(), m = current.getMonth();
  const first = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const daysInPrev  = new Date(y, m, 0).getDate();
  const today = new Date();

  cal.innerHTML = `
    <div class="mtk-calendar__header">
      <button class="mtk-calendar__nav" id="cal-prev">&#8249;</button>
      <span class="mtk-calendar__month-year">${MONTHS[m]} ${y}</span>
      <button class="mtk-calendar__nav" id="cal-next">&#8250;</button>
    </div>
    <div class="mtk-calendar__weekdays">${DAYS.map(d=>`<span>${d}</span>`).join('')}</div>
    <div class="mtk-calendar__days" id="cal-days"></div>`;

  const grid = cal.querySelector('#cal-days');
  // prev month trailing days
  for (let i = first - 1; i >= 0; i--) {
    const d = daysInPrev - i;
    grid.innerHTML += `<div class="mtk-calendar__day mtk-calendar__day--other-month">${d}</div>`;
  }
  // current month
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = today.getFullYear()===y && today.getMonth()===m && today.getDate()===d;
    const isSel   = selected && selected.getFullYear()===y && selected.getMonth()===m && selected.getDate()===d;
    let cls = 'mtk-calendar__day';
    if (isToday) cls += ' mtk-calendar__day--today';
    if (isSel)   cls += ' mtk-calendar__day--selected';
    grid.innerHTML += `<div class="${cls}" data-d="${d}">${d}</div>`;
  }
  // fill remaining
  const total = first + daysInMonth;
  const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= remaining; d++) {
    grid.innerHTML += `<div class="mtk-calendar__day mtk-calendar__day--other-month">${d}</div>`;
  }

  cal.querySelector('#cal-prev').addEventListener('click', () => { current = new Date(y, m-1, 1); render(); });
  cal.querySelector('#cal-next').addEventListener('click', () => { current = new Date(y, m+1, 1); render(); });
  grid.querySelectorAll('[data-d]').forEach(el => {
    el.addEventListener('click', () => {
      selected = new Date(y, m, parseInt(el.dataset.d));
      if (stateEl) stateEl.textContent = `Selected: ${selected.toLocaleDateString('en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}`;
      render();
    });
  });
}
render();
