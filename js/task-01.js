
// 1. Використовує метод querySelector для отримання посилання на список категорій ul#categories.

// 2. Використовує метод querySelectorAll для отримання всіх елементів списку категорій з класом item.

// 3. Виводить кількість категорій в списку, використовуючи властивість length масиву елементів категорій.

// 4. Використовуючи метод forEach, проходиться по кожному елементу категорії li.item.

// 5. Виводить заголовок категорії, знайдений з використанням методу querySelector та властивості textContent.

// 6. Виводить кількість елементів в категорії, знайдених з використанням методу querySelectorAll та властивості length.

//===============================================================================================//

const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});