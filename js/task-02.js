const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");
const createingredientsItemEl = (array) => {
  const arrayItems = [];
  array.forEach((value) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = value;
    arrayItems.push(itemEl);
  });
  return arrayItems;
};
ingredientsEl.append(...createingredientsItemEl(ingredients));
