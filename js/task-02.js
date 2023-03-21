const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

//==============================================================================//

//1 Використовує метод querySelector для отримання посилання на порожній список ul#ingredients.

//2 Використовує метод map для створення нового масиву liElements, який містить li елемент для кожного інгредієнту в ingredients масиві.

//3 Для кожного інгредієнту створюється новий li елемент з використанням методу createElement.

//4 Назва інгредієнту додається як текстовий вміст до li елементу з використанням властивості textContent.

//5 Клас item додається до li елементу з використанням методу classList.add.

//6 Масив liElements додається до ul елементу з використанням методу append та оператора spread.

//==============================================================================//

const ul = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
  
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});

ul.append(...liElements);