
const ps = document.getElementById('pswitch');
document.getElementById('open-pswitch')?.addEventListener('click', e => { e.stopPropagation(); ps.classList.toggle('open'); });
document.addEventListener('click', () => ps.classList.remove('open'));
ps.addEventListener('click', e => e.stopPropagation());
const stateEl = document.getElementById('pswitch-state');
ps.querySelectorAll('.ui5-pswitch__item').forEach(item => {
  item.addEventListener('click', () => {
    ps.querySelectorAll('.ui5-pswitch__item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    if (stateEl) stateEl.textContent = `Active: ${item.querySelector('.ui5-pswitch__name').textContent}`;
    ps.classList.remove('open');
  });
});
