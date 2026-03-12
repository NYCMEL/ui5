
const dlg = document.getElementById('barcode-dialog');
const stateEl = document.getElementById('barcode-state');
document.getElementById('open-barcode')?.addEventListener('click', () => dlg.classList.add('open'));
['close-barcode','close-barcode2'].forEach(id => document.getElementById(id)?.addEventListener('click', () => dlg.classList.remove('open')));
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.classList.remove('open'); });
document.getElementById('simulate-scan')?.addEventListener('click', () => {
  const codes = ['EAN-4719890123456','QR-PROD-2025-XK7','CODE128-0987654321','UPC-012345678905'];
  const result = codes[Math.floor(Math.random()*codes.length)];
  if (stateEl) stateEl.textContent = `Scanned: ${result}`;
  dlg.classList.remove('open');
});
