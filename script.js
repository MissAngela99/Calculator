function add(num1, num2) {
    result = num1 + num2;
    display.innerHTML = `${result}`
};

function subtract(num1, num2) {
    result = num1 - num2;
    display.innerHTML = `${result}`
};

function multiply(num1, num2) {
    result = num1 * num2;
    display.innerHTML = `${result}`
};

function divide(num1, num2) {
    result = num1 / num2;
    display.innerHTML = `${result}` 
};  

let result = 0;
let newArray = [];
let num1;
let num2;
let mathOperator = '';

const display = document.querySelector(".display");
const number = document.querySelectorAll(".btn-number");
const clear = document.querySelector(".backspace");
const operation = document.querySelectorAll(".right-buttons");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".AC");



