
// 1. Спочатку потрібно отримати посилання на елементи з DOM, до яких буде здійснюватися звернення з JavaScript.Для цього можна використати метод document.querySelector():

// 2. Потім слід додати обробник події на input, щоб реагувати на зміну значення input#font - size - control:

// 3. В середині обробника події можна отримати значення input#font - size - control за допомогою властивості value:

// 4. Далі потрібно встановити новий розмір шрифту елемента span#text, використовуючи властивість style.fontSize:

//=====================================================================//

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
    const fontSize = input.value;
    text.style.fontSize = `${fontSize}px`;
});