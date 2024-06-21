function add(number1, number2) {
    result = number1 + number2;
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

number.forEach(button => {
    let numberValue = button.innerHTML;
    button.addEventListener("click", () => {
        display.innerHTML += numberValue;
        newArray.push(numberValue);
    });
});

function operate() {
    if (mathOperator == '+') {
        add(num1, num2);
        num1 = result;
        num2 = undefined;

    } else if (mathOperator == '-') {
        subtract(num1, num2);
        num1 = result;
        num2 = undefined;

    } else if (mathOperator == '/') {
        divide(num1, num2);
        num1 = result;
        num2 = undefined;

    } else if (mathOperator == '*') {
        multiply(num1, num2);
        num1 = result;
        num2 = undefined;
    }    
}

function getNum() {
    if (typeof num1 != `number`) {
        num1 = newArray.join('');
        num1 = parseFloat(num1);
        newArray = [];
        display.innerHTML = '';

    } else if (typeof num1 == `number`) {
        num2 = newArray.join('');
        num2 = parseFloat(num2);
        newArray = [];
        display.innerHTML = '';

    };
};

operation.forEach(operator => {
    operator.addEventListener("click", () => {
        getNum();
        mathOperator = operator.innerHTML;
        if (typeof num1 == `number` && typeof num2 == `number`) {
            display.innerHTML = '';
            operate();
        }
    });
});

equal.addEventListener("click", () => {
    getNum();
    operate();
});


clear.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
    newArray.pop();
});

allClear.addEventListener("click", () => {
    display.innerHTML = '';
    num1 = [];
    num2 = [];
    newArray = [];
});