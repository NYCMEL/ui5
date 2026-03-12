document.querySelectorAll('.mtk-rating:not(.mtk-rating--readonly)').forEach(rating => {
  const stars   = rating.querySelectorAll('.mtk-rating__star');
  const stateEl = rating.closest('.demo-block')?.querySelector('.rating-state');
  let current   = parseInt(rating.dataset.value || 3);

  const setRating = n => {
    current = n;
    stars.forEach((s, i) => s.classList.toggle('filled', i < n));
    if (stateEl) stateEl.textContent = `Rating: ${n} / ${stars.length}`;
  };

  setRating(current);
  stars.forEach((star, i) => {
    star.addEventListener('click', () => setRating(i + 1));
    star.addEventListener('mouseenter', () => stars.forEach((s, j) => s.classList.toggle('filled', j <= i)));
    star.addEventListener('mouseleave', () => setRating(current));
  });
});
