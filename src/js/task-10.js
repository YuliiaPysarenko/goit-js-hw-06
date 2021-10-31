function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesPlaceholder = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let divCounter = 0;
let inputValue = 0;
let size = 30;

const createBoxes = (amount) => {
  amount = inputValue;
  
  while (divCounter < amount) {
    boxesPlaceholder.insertAdjacentHTML("beforeend", `<div style="width:${size}px;height:${size}px;background-color:${getRandomHexColor()};border:1px solid" class="div-box"></div>`);
    divCounter += 1;
    size += 10;
  }
}

const destroyBoxes = () => {
  while (boxesPlaceholder.children.length > 0) {
    boxesPlaceholder.removeChild(document.querySelector(".div-box"));
  }
}

createBtn.addEventListener("click", createBoxes);
input.addEventListener("input", (event) => {inputValue = event.currentTarget.value});

destroyBtn.addEventListener("click", destroyBoxes);