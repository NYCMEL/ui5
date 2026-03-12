document.querySelectorAll('.mtk-icon-item').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.querySelector('.mtk-icon-item__name').textContent;
    console.log('Icon clicked:', name);
  });
});
