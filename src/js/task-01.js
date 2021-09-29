const listCategoriesEl = document.querySelector("#categories");
console.log(`В списке ${listCategoriesEl.children.length} категории.`);

const titleItemEl = document.querySelectorAll("h2");
const newTitle = titleItemEl.forEach((value) =>
  console.log(
    `Категория: ${value.textContent}, Количество элементов: ${value.nextElementSibling.children.length};`
  )
);
