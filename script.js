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

let newArray = []
let display = document.querySelector(".display")
const number = document.querySelectorAll("button")

console.log(number)

number.forEach(button => {
    let numberValue = button.innerHTML;
    button.addEventListener("click", () => {
        display.innerHTML += numberValue;
    });
});
