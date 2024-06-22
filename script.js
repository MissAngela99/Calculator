
function operate(num1, num2) {
    if(mathOperator == '+') {
        result = num1 + num2;
    
    } else if (mathOperator == '-') {
        result = num1 - num2;
    
    } else if (mathOperator == '*') {
        result = num1 * num2;
    
    } else if (mathOperator == '/') {
        result = num1 / num2;
    }
};

function getNumber() {
    let num = array.join('');
    parseInt(num);
    array = [];
    return num;
}

let result = null;
let array = [];
let num1 = null;
let num2 = null;
let mathOperator = null;

const display = document.querySelector(".display");
const number = document.querySelectorAll(".btn-number");
const clear = document.querySelector(".backspace");
const operation = document.querySelectorAll(".right-buttons");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".AC");

number.forEach(button => {
    let value = button.innerHTML;    
        button.addEventListener("click", () => {
        display.innerHTML += value;
        array.push(value);
    })
});


operation.forEach(operator => {
    operator.addEventListener("click", () => {
        num1 = parseFloat(getNumber());
        display.innerHTML = operator.innerHTML;
        mathOperator = operator.innerHTML;
    });
});


equal.addEventListener("click", () => {
    num2 = parseFloat(getNumber());
    operate(num1, num2);
    display.innerHTML = result;
});