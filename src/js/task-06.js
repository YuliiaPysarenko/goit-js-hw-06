const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
    let inputValue = event.currentTarget.value;

    if (inputValue.length === Number(input.dataset.length)) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
});

input.addEventListener("focus", () => {
    input.classList.remove("valid") || input.classList.remove("invalid");
});