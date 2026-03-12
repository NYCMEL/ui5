
const out   = document.getElementById('ddr-output');
const lbl   = document.getElementById('ddr-label');
const cust  = document.getElementById('ddr-custom');
const today = new Date();
const fmt   = d => d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});

function getRange(key) {
  const t = new Date(); t.setHours(0,0,0,0);
  const ranges = {
    'today':      [t, t],
    'yesterday':  [new Date(t-86400000), new Date(t-86400000)],
    'this-week':  [new Date(t - t.getDay()*86400000), t],
    'last-week':  [new Date(t - (t.getDay()+7)*86400000), new Date(t - (t.getDay()+1)*86400000)],
    'this-month': [new Date(t.getFullYear(), t.getMonth(), 1), t],
    'last-month': [new Date(t.getFullYear(), t.getMonth()-1, 1), new Date(t.getFullYear(), t.getMonth(), 0)],
    'last-7':     [new Date(t-6*86400000), t],
    'last-30':    [new Date(t-29*86400000), t],
    'this-year':  [new Date(t.getFullYear(), 0, 1), t],
  };
  return ranges[key];
}

document.querySelectorAll('.mtk-ddr__preset').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.mtk-ddr__preset').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    if (this.dataset.range === 'custom') {
      cust.style.display = 'flex';
      if (lbl) lbl.textContent = 'Custom';
    } else {
      cust.style.display = 'none';
      const [s, e] = getRange(this.dataset.range);
      if (lbl) lbl.textContent = s.getTime() === e.getTime() ? fmt(s) : `${fmt(s)} → ${fmt(e)}`;
    }
  });
});

// Init
lbl.textContent = fmt(today);
