
document.querySelectorAll('.mtk-navlayout__item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.mtk-navlayout__item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});
