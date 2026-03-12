document.querySelectorAll('.radio-group').forEach(group => {
  const stateEl = group.closest('.demo-block')?.querySelector('.radio-state');
  group.querySelectorAll('input[type=radio]').forEach(input => {
    input.addEventListener('change', () => {
      if (stateEl) stateEl.textContent = `Selected: ${input.value}`;
    });
  });
});
