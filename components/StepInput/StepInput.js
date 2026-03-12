document.querySelectorAll('.mtk-step-input').forEach(si => {
  const input = si.querySelector('input');
  si.querySelector('.step-down')?.addEventListener('click', () => {
    const min = parseFloat(input.min ?? -Infinity);
    const step = parseFloat(input.step || 1);
    const val = Math.round((parseFloat(input.value || 0) - step) * 1000) / 1000;
    input.value = Math.max(min, val);
  });
  si.querySelector('.step-up')?.addEventListener('click', () => {
    const max = parseFloat(input.max ?? Infinity);
    const step = parseFloat(input.step || 1);
    const val = Math.round((parseFloat(input.value || 0) + step) * 1000) / 1000;
    input.value = Math.min(max, val);
  });
});
