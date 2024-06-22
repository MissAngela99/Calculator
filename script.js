
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
let control = null;
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

        if (result != null && num1 != null) {
            display.innerHTML = value;
            mathOperator = null;
            num1 = null;
            result = null;
        }
    })
});


operation.forEach(operator => {
    operator.addEventListener("click", () => {
        if (num1 == null) {
            num1 = parseFloat(getNumber());
            display.innerHTML = operator.innerHTML;
            mathOperator = operator.innerHTML;

        } else {
            display.innerHTML = operator.innerHTML;
            mathOperator = operator.innerHTML;
        }
        
        return mathOperator;
    });
});


equal.addEventListener("click", () => {
    if (num2 == null) {
        num2 = parseFloat(getNumber());
        operate(num1, num2);
        display.innerHTML = result;
        control = result + 1;

        num1 = result;
        num2 = null;
    };
});

