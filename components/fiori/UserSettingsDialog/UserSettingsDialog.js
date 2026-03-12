
const overlay = document.getElementById('settings-dialog');
document.getElementById('open-settings')?.addEventListener('click', () => overlay.classList.add('open'));
['close-settings','cancel-settings'].forEach(id => document.getElementById(id)?.addEventListener('click', () => overlay.classList.remove('open')));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
document.querySelectorAll('.ui5-settings-nav__item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.ui5-settings-nav__item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.ui5-settings-pane').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('tab-' + this.dataset.tab)?.classList.add('active');
  });
});
