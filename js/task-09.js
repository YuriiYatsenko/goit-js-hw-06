// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// 1. Знайдіть кнопку за її класом та додайте слухача подій на клік:

// 2. Оголошення функції changeBodyColor, яка буде генерувати новий випадковий колір та змінювати колір фону елемента body:

// 3. Оголошення функції getRandomHexColor, яка буде генерувати випадковий колір у форматі HEX та повертати його:

// 4. Оголошення функції getRandomHexColor, яка буде генерувати випадковий колір у форматі HEX та повертати його:

// 5. Оголошення змінної, щоб зберігати поточний колір фону body:

// 6. Додавання у текст span елемента поточного значення кольору фону body:

const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
