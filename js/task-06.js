
// 1. Спочатку ми отримуємо посилання на елемент input за допомогою методу document.querySelector('#validation-input') і зберігаємо його у змінну input.
    
// 2. Потім ми встановлюємо обробник події на blur для елементу input за допомогою методу addEventListener.

// 3.У функції-обробнику події ми отримуємо довжину значення, введеного в input, за допомогою властивості value.length та зберігаємо його у змінну valueLength.
    
// 4. Ми отримуємо потрібну довжину з атрибуту data-length за допомогою методу getAttribute('data-length') і зберігаємо її у змінну requiredLength.

// 5. Порівнюємо valueLength з requiredLength, якщо вони рівні, то ми додаємо клас valid до елементу input за допомогою методу classList.add('valid'), і видаляємо клас invalid за допомогою методу classList.remove('invalid').

// 6. Якщо valueLength не рівне requiredLength, то ми додаємо клас invalid до елементу input за допомогою методу classList.add('invalid'), і видаляємо клас valid за допомогою методу classList.remove('valid').

// 7. Таким чином, якщо користувач ввів правильну кількість символів, то границя input буде зеленої, якщо неправильну - червоної.
    
//=====================================================================//

const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const valueLength = input.value.length;
  const requiredLength = input.getAttribute('data-length');

  if (valueLength === parseInt(requiredLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}); 

//===============================================================//

// const input = document.getElementById('validation-input');

// input.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//   const inputValue = event.currentTarget.value;
//   const dataLength = event.currentTarget.getAttribute('data-length');

//   if (inputValue.length === Number(dataLength)) {
//     input.classList.add('valid');
//     input.classList.remove('invalid');
//   } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//   }
// }