const stateEl = document.querySelector('.toggle-state');
document.querySelectorAll('.mtk-toggle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    if (stateEl) {
      const label = this.textContent.trim();
      stateEl.textContent = `${label} — ${this.classList.contains('active') ? 'Pressed' : 'Normal'}`;
    }
  });
});
