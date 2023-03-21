
// 1.Сначала мы используем метод querySelector() для получения ссылок на элементы input#name - input и span#name - output в DOM:

// 2.Затем мы добавляем слушатель события input к элементу input#name - input, чтобы реагировать на изменения значения:

// 3.Внутри функции обработчика мы получаем текущее значение элемента input#name - input с помощью свойства value объекта события и удаляем начальные и конечные пробелы из этого значения с помощью метода trim():

// 4.Затем мы проверяем, не является ли значение пустой строкой.Если значение не является пустой строкой, мы устанавливаем его как текстовое содержимое элемента span#name - output с помощью свойства textContent.В противном случае мы устанавливаем строку "Anonymous":

// 5.Таким образом, каждый раз, когда пользователь вводит текст в элемент input#name-input, значение этого элемента проверяется на пустую строку, и соответствующее текстовое содержимое устанавливается в элементе span#name-output.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    const value = event.target.value.trim();
    nameOutput.textContent = value ? value : 'Anonymous';
});