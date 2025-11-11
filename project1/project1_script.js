// ==============================
// Project 1 - Pre-K Learning Website
// JavaScript by Clifford Odige
// ==============================

// ========== 1) COLORS SECTION ==========

// color name -> hex map
const colorHex = {
  Red: '#ef4444',
  Blue: '#3b82f6',
  Yellow: '#facc15',
  Green: '#22c55e',
  Purple: '#a855f7',
  Orange: '#fb923c',
  Pink: '#f472b6',
  Brown: '#8b5e3c'
};

const colorGridEl   = document.getElementById('colorGrid');
const colorResultEl = document.getElementById('colorResult');
const colorPreviewEl= document.getElementById('colorPreview');

// (a) click a color card
if (colorGridEl) {
  colorGridEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.card-btn');
    if (!btn) return;

    const clr = btn.dataset.color;

    // update text and preview
    if (colorResultEl)  colorResultEl.textContent = clr;
    if (colorPreviewEl) colorPreviewEl.style.background = colorHex[clr] || '#f3f4f6';

    // highlight selected card
    document.querySelectorAll('.card-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
    });
  });
}

// (b) dropdown select + Apply
(function () {
  const select = document.getElementById('colorSelect');
  const apply  = document.getElementById('btnApplyColor');

  function applyColorFromSelect() {
    const val = select?.value;
    if (!val) return;

    if (colorResultEl)  colorResultEl.textContent = val;
    if (colorPreviewEl) colorPreviewEl.style.background = colorHex[val] || '#f3f4f6';

    document.querySelectorAll('.card-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.color === val);
    });
  }

  select?.addEventListener('change', applyColorFromSelect);
  apply?.addEventListener('click', applyColorFromSelect);
})();

// ========== 2) NUMBERS SECTION ==========

const numberGrid = document.getElementById('numberGrid');

// Shuffle with Fisher–Yates
document.getElementById('btnShuffle')?.addEventListener('click', () => {
  if (!numberGrid) return;
  const items = Array.from(numberGrid.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    numberGrid.appendChild(items[j]);
  }
});

// Reset 1–10 using data-num
document.getElementById('btnResetNumbers')?.addEventListener('click', () => {
  if (!numberGrid) return;
  const items = Array.from(numberGrid.children)
    .sort((a, b) => Number(a.dataset.num) - Number(b.dataset.num));
  items.forEach(li => numberGrid.appendChild(li));
});

// ========== 3) ANIMALS SECTION ==========

const animalList = document.getElementById('animalList');

document.getElementById('btnHideAnimalWords')?.addEventListener('click', () => {
  animalList?.querySelectorAll('.label').forEach(el => {
    el.style.visibility = 'hidden';
  });
});

document.getElementById('btnShowAnimalWords')?.addEventListener('click', () => {
  animalList?.querySelectorAll('.label').forEach(el => {
    el.style.visibility = 'visible';
  });
});

// ========== 4) SHAPES SECTION ==========

document.getElementById('shapeList')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.shape-btn');
  if (!btn) return;
  const shape = btn.querySelector('.shape');
  shape.classList.toggle('filled');
});

