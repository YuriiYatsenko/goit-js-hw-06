// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// 1. Отримай доступ до елементів HTML з допомогою методу document.querySelector() та збережи їх у змінні:

// 2. Створи функцію createBoxes(amount), яка буде створювати div-елементи та додавати їх у div#boxes.

// 3. Додай обробник події click на кнопку створення, щоб запустити функцію createBoxes з введеною користувачем кількістю елементів.

// 4. Створи функцію destroyBoxes(), яка буде очищати div#boxes від створених елементів.

// 5. Додай обробник події click на кнопку очищення, щоб запустити функцію destroyBoxes.

// 6. Додай функцію getRandomHexColor, яка буде повертати випадковий HEX-колір.

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    
    size += 10;
  }
}

createBtn.addEventListener('click', () => {
  createBoxes(Number(input.value));
});

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
