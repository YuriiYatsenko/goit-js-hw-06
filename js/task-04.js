
const counter = document.querySelector('#counter');
const valueEl = counter.querySelector('#value');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});


// 1. Цей код спочатку отримує всі необхідні елементи зі сторінки за допомогою методу document.querySelector().

// 2. він ініціалізує змінну counterValue з початковим значенням 0. 

// 3. він додає слухачів подій до кнопок за допомогою методу addEventListener().

// 4. В середині обробників подій змінюється значення counterValue та оновлюється вміст елементу valueEl за допомогою властивості textContent.