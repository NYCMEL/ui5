document.querySelectorAll('.ui5-panel__header').forEach(header => {
  if (!header.querySelector('.ui5-panel__toggle')) return;
  header.addEventListener('click', () => header.closest('.ui5-panel').classList.toggle('collapsed'));
});
