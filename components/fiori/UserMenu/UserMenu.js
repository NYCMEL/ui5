
const menu = document.getElementById('usermenu');
document.getElementById('open-usermenu')?.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('open'); });
document.addEventListener('click', () => menu.classList.remove('open'));
menu.addEventListener('click', e => e.stopPropagation());
