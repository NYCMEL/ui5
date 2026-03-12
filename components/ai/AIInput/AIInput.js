
document.querySelectorAll('.mtk-ai-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    const input = document.getElementById('ai-input-field');
    if (input) input.value = this.dataset.val;
    input.focus();
  });
});
