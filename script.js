const display = document.getElementById('display');
const calculator = document.getElementById('calculator');

calculator.addEventListener('click', inputDigit);


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

function inputDigit(e) {
    if (e.target.className === 'digit') {
        displayValue += e.target.value;
        updateDisplay();
    }
}
function updateDisplay() {
    display.textContent = displayValue;
}
let displayValue = '';
let num1 = '';
let num2 = '';


let result = operate('add', 3, 5);
console.log(result);

