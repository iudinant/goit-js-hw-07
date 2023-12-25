
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  const boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    const boxColor = getRandomHexColor();

    newBox.style.width = `${boxSize + i * 10}px`;
    newBox.style.height = `${boxSize + i * 10}px`;
    newBox.style.backgroundColor = boxColor;

    boxes.appendChild(newBox);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const input = document.querySelector('input[type="number"]');

  createBtn.addEventListener('click', () => {
    const amount = input.value;

    if (amount < 1 || amount > 100) {
      return;
    }

    createBoxes(amount);
    input.value = '';
  });

  destroyBtn.addEventListener('click', () => {
    const boxes = document.querySelector('#boxes');
    boxes.innerHTML = '';
  });
});