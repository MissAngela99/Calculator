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
let num1 = '';
let num2 = '';
let mathOperator = '';
const display = document.querySelector(".display");
const number = document.querySelectorAll(".btn-number");
const clear = document.querySelector(".backspace");
const operation = document.querySelectorAll(".right-buttons");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".AC");

console.log(number)

number.forEach(button => {
    let numberValue = button.innerHTML;
    button.addEventListener("click", () => {
        display.innerHTML += numberValue;
        newArray.push(numberValue);

        if (num1) {
            display.innerHTML = ''
        }

    });
});


clear.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
    newArray.pop();
});

operation.forEach(operator => {
    operator.addEventListener("click", () => {
        if (newArray.length !== 0) {
            num1 = newArray.join("");
            display.innerHTML += operator.innerHTML
            newArray = [];
        };
    });
});

allClear.addEventListener("click", () => {
    display.innerHTML = '';
    num1 = 0;
    num2 = 0;
    newArray = [];
});


