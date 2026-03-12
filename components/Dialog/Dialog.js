document.querySelectorAll('[data-dialog-open]').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById(btn.dataset.dialogOpen)?.classList.add('open'));
});
document.querySelectorAll('.ui5-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
});
document.querySelectorAll('[data-dialog-close]').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById(btn.dataset.dialogClose)?.classList.remove('open'));
});
