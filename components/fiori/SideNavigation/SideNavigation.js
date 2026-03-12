
const nav = document.getElementById('sidenav');
document.getElementById('sidenav-toggle')?.addEventListener('click', () => nav.classList.toggle('collapsed'));
document.querySelectorAll('.ui5-sidenav__item').forEach(item => {
  item.addEventListener('click', function(e) {
    if (!this.classList.contains('ui5-sidenav__group-header')) {
      document.querySelectorAll('.ui5-sidenav__item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    }
  });
});
