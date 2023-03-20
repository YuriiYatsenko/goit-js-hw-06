
const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;

  const currentColor = document.body.style.backgroundColor;
  colorSpan.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
