document.querySelectorAll('.ui5-icon-item').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.querySelector('.ui5-icon-item__name').textContent;
    console.log('Icon clicked:', name);
  });
});
