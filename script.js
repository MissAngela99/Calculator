function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

let newArray = [];
const display = document.querySelector(".display");
const number = document.querySelectorAll(".btn-number");
const clear = document.querySelector(".backspace");

console.log(number)

number.forEach(button => {
    let numberValue = button.innerHTML;
    button.addEventListener("click", () => {
        display.innerHTML += numberValue;
        newArray.push(numberValue);
    });
});


clear.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
    newArray.pop();
});