document.querySelectorAll('.ui5-checkbox input').forEach(input => {
  input.addEventListener('change', function() {
    const stateEl = this.closest('.demo-block')?.querySelector('.checkbox-state');
    if (stateEl) stateEl.textContent = `Selected: ${this.checked}`;
  });
});
