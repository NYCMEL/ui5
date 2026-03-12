// Button — click feedback only.
document.querySelectorAll('.mtk-btn:not([disabled])').forEach(btn => {
  btn.addEventListener('click', function() {
    this.style.transform = 'scale(0.97)';
    setTimeout(() => this.style.transform = '', 100);
  });
});
