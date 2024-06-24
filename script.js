
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

let control = 0;
let result = null;
let array = [];
let num1 = null;
let num2 = null;
let mathOperator = null;


const display = document.querySelector(".display");
const number = document.querySelectorAll(".btn-number");
const backspace = document.querySelector(".backspace");
const operation = document.querySelectorAll(".right-buttons");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".AC");
const plusminus = document.querySelector(".plusminus");
const decimal = document.querySelector(".decimal");

const span = document.createElement("span");
const minus = span.textContent = "-";


decimal.addEventListener("click", () => {
    if (!array.includes(".")) {
        array.push(".")
        display.textContent += '.'
    }

})

plusminus.addEventListener("click", () => {
    if (!array.includes("-")) {
        array.unshift(minus);
        display.prepend(minus);

    } else if (array.includes("-")) {
        array.shift(minus);
        display.textContent = display.textContent.slice(1)
    }
});

backspace.addEventListener("click", () => {
    array.pop();
    display.textContent = display.textContent.slice(0, -1);
});

allClear.addEventListener("click", () => {
    array = [];
    num1 = null;
    num2 = null;
    result = null;
    mathOperator = null;
    control = 0;
    display.textContent = '';
});


number.forEach(button => {
    let value = button.textContent;
        button.addEventListener("click", () => {
            display.textContent += value;
            array.push(value);
            if (num2 == null && control > 0) {
                num1 = null;
                num2 = null;
                result = null;

                control = 0;
                display.textContent = '' + `${value}`;
            }
    });
});


operation.forEach(operator => {

    operator.addEventListener("click", () => {
        if (num1 == null) {
            num1 = parseFloat(getNumber());
            display.textContent = operator.innerHTML;
            mathOperator = operator.innerHTML;

        } else if (control > 0) {
            control = 0;
            display.textContent = operator.innerHTML;
            mathOperator = operator.innerHTML;

        } else if (num2 == null || num1 != null) {

            num2 = parseFloat(getNumber());
            operate(num1, num2);

            display.textContent = operator.innerHTML;
            mathOperator = operator.innerHTML;

            display.textContent = result;
            num1 = result;
            num2 = null;
            result = null;
            control += 1;
        }
    });
});


equal.addEventListener("click", () => {
    if (num2 == null || num1 != null) {

        num2 = parseFloat(getNumber());
        operate(num1, num2);

        mathOperator = null;
        display.textContent = result;
        num1 = result;
        num2 = null;
        result = null;
        control += 1;
    };
});

