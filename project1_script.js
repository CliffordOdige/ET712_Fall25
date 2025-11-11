// ==============================
// Project 1 - Pre-K Learning Website
// JavaScript by Clifford Odige
// ==============================

// 1) COLORS SECTION

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

const colorGridEl    = document.getElementById('colorGrid');
const colorResultEl  = document.getElementById('colorResult');
const colorPreviewEl = document.getElementById('colorPreview');

// click a color card
if (colorGridEl) {
  colorGridEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.card-btn');
    if (!btn) return;
    const clr = btn.dataset.color;

    if (colorResultEl)  colorResultEl.textContent = clr;
    if (colorPreviewEl) colorPreviewEl.style.background = colorHex[clr] || '#f3f4f6';

    document.querySelectorAll('.card-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
    });
  });
}

// dropdown select + Apply
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

// 2) NUMBERS SECTION

const numberGrid = document.getElementById('numberGrid');

document.getElementById('btnShuffle')?.addEventListener('click', () => {
  if (!numberGrid) return;
  const items = Array.from(numberGrid.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    numberGrid.appendChild(items[j]);
  }
});

document.getElementById('btnResetNumbers')?.addEventListener('click', () => {
  if (!numberGrid) return;
  const items = Array.from(numberGrid.children)
    .sort((a, b) => Number(a.dataset.num) - Number(b.dataset.num));
  items.forEach(li => numberGrid.appendChild(li));
});

// 3) ANIMALS SECTION

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

// 4) SHAPES SECTION

document.getElementById('shapeList')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.shape-btn');
  if (!btn) return;
  const shape = btn.querySelector('.shape');
  shape.classList.toggle('filled');
});

// ==============================
// ANIMALS: preview + quiz
// ==============================

// Map animal name -> image file in images/animals/
const animalSrc = {
  Cat: 'cat.jpg',
  Dog: 'dog.jpg',
  Lion: 'lion.jpg',
  Elephant: 'elephant.jpg',
  Fish: 'fish.jpg'
};

const animalListEl = document.getElementById('animalList');
const animalPreviewImg = document.getElementById('animalPreview');
const animalNameDisplay = document.getElementById('animalNameDisplay');

// show preview on click
animalListEl?.addEventListener('click', (e) => {
  const btn = e.target.closest('.animal-btn');
  if (!btn) return;
  const name = btn.dataset.animal;
  const src = animalSrc[name];
  if (animalPreviewImg && src) {
    animalPreviewImg.src = `images/animals/${src}`;
    animalPreviewImg.alt = name;
  }
  if (animalNameDisplay) {
    animalNameDisplay.textContent = name;
    animalNameDisplay.classList.remove('muted');
  }
});

// quiz: "Find the ____"
let animalTarget = null;
const startAnimalQuizBtn = document.getElementById('startAnimalQuiz');
const animalPrompt = document.getElementById('animalPrompt');
const animalFeedback = document.getElementById('animalFeedback');

startAnimalQuizBtn?.addEventListener('click', () => {
  const names = Object.keys(animalSrc);
  animalTarget = names[Math.floor(Math.random() * names.length)];
  if (animalPrompt) animalPrompt.textContent = `Find the ${animalTarget}`;
  if (animalFeedback) animalFeedback.textContent = '';
  // highlight all buttons slightly, target will stand out when correct is clicked
  document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('target'));
});

animalListEl?.addEventListener('click', (e) => {
  const btn = e.target.closest('.animal-btn');
  if (!btn || !animalTarget) return;
  const picked = btn.dataset.animal;
  if (picked === animalTarget) {
    animalFeedback?.classList.remove('no');
    animalFeedback?.classList.add('ok');
    if (animalFeedback) animalFeedback.textContent = 'Great job!';
    animalTarget = null;
  } else {
    animalFeedback?.classList.remove('ok');
    animalFeedback?.classList.add('no');
    if (animalFeedback) animalFeedback.textContent = 'Try again…';
  }
});

// ==============================
// SHAPES: existing toggle + quiz
// ==============================

let shapeTarget = null;
const startShapeQuizBtn = document.getElementById('startShapeQuiz');
const shapePrompt = document.getElementById('shapePrompt');
const shapeFeedback = document.getElementById('shapeFeedback');

startShapeQuizBtn?.addEventListener('click', () => {
  const names = ['Circle','Square','Triangle','Rectangle','Star'];
  shapeTarget = names[Math.floor(Math.random() * names.length)];
  if (shapePrompt) shapePrompt.textContent = `Click the ${shapeTarget}`;
  if (shapeFeedback) shapeFeedback.textContent = '';
  document.querySelectorAll('#shapeList .shape-btn').forEach(b => b.classList.remove('target'));
});

// augment your existing click handler: also check quiz answer
document.getElementById('shapeList')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.shape-btn');
  if (!btn) return;

  // original behavior: toggle fill
  const shape = btn.querySelector('.shape');
  shape?.classList.toggle('filled');

  // quiz behavior
  if (!shapeTarget) return;
  const picked = btn.dataset.shape;
  if (picked === shapeTarget) {
    shapeFeedback?.classList.remove('no');
    shapeFeedback?.classList.add('ok');
    if (shapeFeedback) shapeFeedback.textContent = 'Nice!';
    shapeTarget = null;
  } else {
    shapeFeedback?.classList.remove('ok');
    shapeFeedback?.classList.add('no');
    if (shapeFeedback) shapeFeedback.textContent = 'Not that one…';
  }
});
