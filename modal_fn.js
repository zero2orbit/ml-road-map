const PHASE_COLORS = {p1:'#00f5a0',p2:'#7b61ff',p3:'#ff6b6b',p4:'#ffd93d',p5:'#00d4ff',p6:'#ff61ab'};
function openModal(phaseIdx,topicIdx){
  const ph=PHASES[phaseIdx],top=ph.topics[topicIdx],d=top.d;
  if(!d)return;
  const color=PHASE_COLORS[ph.colorClass]||'#00f5a0';
  document.getElementById('modal-bar').style.background=color;
  document.getElementById('modal-num').textContent=ph.number+' \u00b7 TOPIC '+top.num;
  document.getElementById('modal-title').textContent=top.name;
  document.getElementById('modal-desc').textContent=d.desc;
  document.getElementById('modal-why').textContent=d.why;
  document.getElementById('modal-badges').innerHTML=[{label:'\u23f1 Time',val:d.time},{label:'\ud83d\udcca Level',val:d.difficulty}].map(b=>`<span class="modal-badge" style="--modal-color:${color}">${b.label}: ${b.val}</span>`).join('');
  document.getElementById('modal-concepts').innerHTML=d.concepts.map(c=>`<div class="modal-concept" style="border-left-color:${color}">\u25c6 ${c}</div>`).join('');
  document.getElementById('modal-resources').innerHTML=d.resources.map(r=>`<div class="modal-resource"><span class="res-icon">${r.icon}</span>${r.text}</div>`).join('');
  document.querySelectorAll('.modal-section-title').forEach(el=>el.style.color=color);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('modal-overlay').addEventListener('click',function(e){if(e.target===this)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
