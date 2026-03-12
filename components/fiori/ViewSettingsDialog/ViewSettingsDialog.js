
const vsd = document.getElementById('vsd-dialog');
document.getElementById('open-vsd')?.addEventListener('click', () => vsd.classList.add('open'));
['close-vsd','close-vsd2','close-vsd3'].forEach(id => document.getElementById(id)?.addEventListener('click', () => vsd.classList.remove('open')));
vsd.addEventListener('click', e => { if (e.target === vsd) vsd.classList.remove('open'); });
document.querySelectorAll('[data-vsd]').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('[data-vsd]').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.vsd-pane').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('vsd-' + this.dataset.vsd)?.classList.add('active');
  });
});
