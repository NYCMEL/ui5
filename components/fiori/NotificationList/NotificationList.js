
document.querySelectorAll('.mtk-notif__close').forEach(btn => {
  btn.addEventListener('click', () => {
    const notif = btn.closest('.mtk-notif');
    notif.style.transition = 'opacity .2s, max-height .3s, padding .3s';
    notif.style.opacity = '0'; notif.style.maxHeight = notif.offsetHeight+'px';
    setTimeout(() => { notif.style.maxHeight = '0'; notif.style.padding = '0'; }, 10);
    setTimeout(() => notif.remove(), 350);
  });
});
