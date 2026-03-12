
const start = document.getElementById('dr-start');
const end   = document.getElementById('dr-end');
const state = document.getElementById('dr-state');
function update() {
  if (start.value && end.value) {
    if (end.value < start.value) { end.value = start.value; }
    const s = new Date(start.value).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    const e = new Date(end.value).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    if (state) state.textContent = `Range: ${s} → ${e}`;
  }
}
start.addEventListener('change', () => { if (end.value && end.value < start.value) end.value = start.value; update(); });
end.addEventListener('change', update);
