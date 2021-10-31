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

for (const ingredient of ingredients) {
  listItem = document.createElement("li");
  listItem.textContent = ingredient;
  
  listItem.classList.add("item");
  list.append(listItem);
}