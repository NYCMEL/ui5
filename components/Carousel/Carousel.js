document.querySelectorAll('.mtk-carousel').forEach(carousel => {
  const track = carousel.querySelector('.mtk-carousel__track');
  const slides = carousel.querySelectorAll('.mtk-carousel__slide');
  const dots   = carousel.querySelectorAll('.mtk-carousel__dot');
  let current  = 0;

  const goTo = (n) => {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  carousel.querySelector('.mtk-carousel__nav--prev')?.addEventListener('click', () => goTo(current - 1));
  carousel.querySelector('.mtk-carousel__nav--next')?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  goTo(0);
});
