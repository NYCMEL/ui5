document.querySelectorAll('.mtk-panel__header').forEach(header => {
  if (!header.querySelector('.mtk-panel__toggle')) return;
  header.addEventListener('click', () => header.closest('.mtk-panel').classList.toggle('collapsed'));
});
