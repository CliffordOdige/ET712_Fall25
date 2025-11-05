// ==============================
// Project 1 - Pre-K Learning Website
// JavaScript by Clifford Odige
// ==============================

// ========== 1. COLORS SECTION ==========

const colorHex = {
  Red:'#ef4444', Blue:'#3b82f6', Yellow:'#facc15', Green:'#22c55e',
  Purple:'#a855f7', Orange:'#fb923c', Pink:'#f472b6', Brown:'#8b5e3c'
};

// (a) Click color cards
const colorResult = document.getElementById('colorResult');
document.getElementById('colorGrid')?.addEventListener('click',(e)=>{
  const btn=e.target.closest('.card-btn');
  if(!btn) return;
  const clr=btn.dataset.color;
  colorResult.textContent=clr;
});

// (b) Dropdown color selection
(function(){
  const select=document.getElementById('colorSelect');
  const preview=document.getElementById('colorPreview');
  const apply=document.getElementById('btnApplyColor');
  const result=document.getElementById('colorResult');

  function applyColor(){
    const val=select.value;
    if(!val) return;
    preview.style.background=colorHex[val]||'#f3f4f6';
    result.textContent=val;
    document.querySelectorAll('.card-btn').forEach(btn=>{
      btn.classList.toggle('active',btn.dataset.color===val);
    });
  }
  select?.addEventListener('change',applyColor);
  apply?.addEventListener('click',applyColor);
})();

// ========== 2. NUMBERS SECTION ==========
const numberGrid=document.getElementById('numberGrid');

document.getElementById('btnShuffle')?.addEventListener('click',()=>{
  const items=Array.from(numberGrid.children);
  for(let i=items.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    numberGrid.appendChild(items[j]);
  }
});

document.getElementById('btnResetNumbers')?.addEventListener('click',()=>{
  const items=Array.from(numberGrid.children)
    .sort((a,b)=>Number(a.dataset.num)-Number(b.dataset.num));
  items.forEach(n=>numberGrid.appendChild(n));
});

// ========== 3. ANIMALS SECTION ==========
const animalList=document.getElementById('animalList');
document.getElementById('btnHideAnimalWords')?.addEventListener('click',()=>{
  animalList.querySelectorAll('.label').forEach(el=>el.style.visibility='hidden');
});
document.getElementById('btnShowAnimalWords')?.addEventListener('click',()=>{
  animalList.querySelectorAll('.label').forEach(el=>el.style.visibility='
