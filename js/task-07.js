
const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
    const fontSize = input.value;
    text.style.fontSize = `${fontSize}px`;
});