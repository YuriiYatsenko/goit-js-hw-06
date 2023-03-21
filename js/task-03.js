const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//===============================================================================================//

// 1. Створення масиву об'єктів images. Для цього ми створюємо змінну images і призначаємо їй значення масиву з трьома об'єктами, які містять url і alt зображення.

// 2. Визначення змінної galleryList та її значення.Для цього ми використовуємо метод querySelectorдля пошуку елементу ul.gallery на сторінці HTML і призначаємо його значення змінній galleryList.

// 3. Створення рядка HTML для кожного зображення.Ми використовуємо метод reduce() для проходження по масиву images і створення рядка HTML для кожного зображення.

// В даному коді ми використовуємо деструктуризацію об'єкту, щоб отримати значення url і alt для кожного зображення. Потім ми створюємо рядок HTML, використовуючи шаблонні рядки, і додаємо його до аккумулятора.

// 4. Додавання елементів галереї до DOM за одну операцію.Ми використовуємо метод insertAdjacentHTML() для додавання рядка HTML з елементами галереї до ul.gallery на сторінці HTML.

//===============================================================================================//

const galleryList = document.querySelector('.gallery');

const galleryItems = images.reduce((acc,{url, alt}) => {
  return acc + `<li class="gallery-item"><img class="gallery-image" src="${url}" alt="${alt}"></li>`;
}, '');

galleryList.insertAdjacentHTML('beforeend', galleryItems);


// const galleryItems = images.map(({url, alt}) => 
//   `<li class="gallery-item"><img class="gallery-image" src="${url}" alt="${alt}"></li>`
// ).join('');

// Цей код буде мати той самий результат, що і попередній код з використанням методу reduce. Просто зараз ми використовуємо метод map, який робить те ж саме, що й reduce, але більш простим способом. Оскільки map повертає масив, ми використовуємо метод join для об'єднання всіх елементів масиву у один рядок.