
// 1. Спочатку потрібно визначити форму, яка повинна бути відправлена. У нашому випадку форма має клас "login-form".

// 2. Для обробки події відправлення форми використовуємо метод addEventListener() з подією "submit". При цьому, слухач подій повинен бути доданий до самої форми.

// 3. У функції-обробнику події submit ми повинні перевірити, чи всі поля форми заповнені. Для цього можна використовувати властивість elements об'єкта форми, який містить всі елементи форми в вигляді об'єкту.

// 4.Якщо у формі є незаповнені поля, потрібно вивести alert з попередженням про те, що всі поля повинні бути заповнені.

// 5.Якщо користувач заповнив усі поля і відправив форму, потрібно зібрати значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.

// 6.Для виведення об'єкту з введеними даними в консоль можна використовувати метод console.log().

// 7.Щоб очистити значення полів форми, можна використовувати метод reset(). Він поверне форму до початкового стану і очистить значення всіх полів.

//======================================================================//

const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // запобігаємо перезавантаженню сторінки

if (!emailInput.value || !passwordInput.value) {
    alert('All fields must be filled!');
} else {
    const formData = {
    email: emailInput.value,
    password: passwordInput.value,
    };

    console.log(formData);
}

  loginForm.reset(); // очистка форми
});