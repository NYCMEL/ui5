const stateEl = document.querySelector('.table-state');
const updateState = () => {
  const selected = document.querySelectorAll('.row-select:checked').length;
  if (stateEl) stateEl.textContent = `${selected} row${selected !== 1 ? 's' : ''} selected`;
};

document.querySelectorAll('.row-select').forEach(cb => {
  cb.addEventListener('change', function() {
    this.closest('tr').classList.toggle('selected', this.checked);
    updateState();
  });
});

document.querySelector('.select-all')?.addEventListener('change', function() {
  document.querySelectorAll('.row-select').forEach(cb => {
    cb.checked = this.checked;
    cb.closest('tr').classList.toggle('selected', this.checked);
  });
  updateState();
});
