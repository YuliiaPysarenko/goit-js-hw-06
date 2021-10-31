const value = document.querySelector("#value");

const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"]');

let counterValue = Number.parseInt(value.textContent);

const addValue = () => {
    value.textContent = counterValue += 1;
};

const removeValue = () => {
    value.textContent = counterValue -= 1;
};

buttonPlus.addEventListener("click", addValue);
buttonMinus.addEventListener("click", removeValue);