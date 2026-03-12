document.querySelectorAll('.mtk-switch input').forEach(input => {
  input.addEventListener('change', function() {
    const lbl = this.closest('.mtk-switch')?.querySelector('.mtk-switch__label');
    if (lbl) lbl.textContent = this.checked ? 'On' : 'Off';
    const stateEl = this.closest('.demo-block')?.querySelector('.switch-state');
    if (stateEl) stateEl.textContent = `Last changed: ${this.checked ? 'On' : 'Off'}`;
  });
});
