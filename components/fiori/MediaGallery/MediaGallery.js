
const mainImg = document.querySelector('#mg-main img');
document.querySelectorAll('.mtk-mediagallery__thumb').forEach(thumb => {
  thumb.addEventListener('click', function() {
    document.querySelectorAll('.mtk-mediagallery__thumb').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    if (mainImg) { mainImg.style.opacity = '0'; setTimeout(() => { mainImg.src = this.dataset.src; mainImg.style.opacity = '1'; }, 200); }
  });
});
