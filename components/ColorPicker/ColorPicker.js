
const hueSlider = document.getElementById('cp-hue');
const hexInput  = document.getElementById('cp-hex');
const rInput    = document.getElementById('cp-r');
const gInput    = document.getElementById('cp-g');
const bInput    = document.getElementById('cp-b');
const preview   = document.getElementById('cp-preview');
const label     = document.getElementById('cp-label');
const canvas    = document.getElementById('cp-canvas');
const handle    = document.getElementById('cp-handle');

let hue = 217, sat = 70, val = 82;

function hsvToRgb(h,s,v) {
  s/=100; v/=100; const k=n=>(n+h/60)%6;
  const f=(n,k,t)=>v-v*s*Math.max(Math.min(k,4-k,1),0);
  return [Math.round(f(5,k(5),255)*255), Math.round(f(3,k(3),255)*255), Math.round(f(1,k(1),255)*255)];
}
function toHex(r,g,b) { return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join(''); }

function update() {
  canvas.style.background = `linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, hsl(${hue},100%,50%))`;
  const [r,g,b] = hsvToRgb(hue, sat, val);
  const hex = toHex(r,g,b);
  preview.style.background = hex;
  label.textContent = hex;
  hexInput.value = hex;
  rInput.value = r; gInput.value = g; bInput.value = b;
  handle.style.left = sat + '%'; handle.style.top = (100-val) + '%';
}

hueSlider.addEventListener('input', () => { hue = +hueSlider.value; update(); });

canvas.addEventListener('mousedown', e => {
  const move = ev => {
    const r = canvas.getBoundingClientRect();
    sat = Math.max(0, Math.min(100, ((ev.clientX - r.left) / r.width) * 100));
    val = Math.max(0, Math.min(100, 100 - ((ev.clientY - r.top) / r.height) * 100));
    update();
  };
  move(e);
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', () => window.removeEventListener('mousemove', move), {once:true});
});

update();
