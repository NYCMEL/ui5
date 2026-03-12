
const pop = document.getElementById('rpop');
document.getElementById('open-rpop')?.addEventListener('click', e => { e.stopPropagation(); pop.classList.toggle('open'); });
['close-rpop','close-rpop2'].forEach(id => document.getElementById(id)?.addEventListener('click', () => pop.classList.remove('open')));
document.addEventListener('click', e => { if (!pop.parentElement.contains(e.target)) pop.classList.remove('open'); });
