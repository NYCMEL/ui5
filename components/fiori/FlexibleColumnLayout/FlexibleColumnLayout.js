
document.querySelectorAll('.fcl-mode').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.fcl-mode').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const cols = +this.dataset.cols;
    const mid = document.querySelector('.mtk-fcl__col--mid');
    const end = document.querySelector('.mtk-fcl__col--end');
    if (mid) mid.style.display = cols >= 2 ? '' : 'none';
    if (end) end.style.display = cols >= 3 ? '' : 'none';
  });
});
