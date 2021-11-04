const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");
let listItem;

// Варіант 1, згідно з ТЗ

const makeListItem = (ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");

  return listItem;
}

const elements = ingredients.map(makeListItem);
list.append(...elements);


// Варіант 2, без document.createElement

// for (let ingredient of ingredients) {
//   listItem = `<li class="item">${ingredient}</li>`
//   listItems += listItem;
// }

// list.innerHTML += listItems;


// Варіант 3, елемент додається в циклі

// for (const ingredient of ingredients) {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;

//   listItem.classList.add("item");
//   list.append(listItem);
// }