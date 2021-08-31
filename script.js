const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

calculator.addEventListener('click', inputDigit);
calculator.addEventListener('click', (e) => {
    if (e.target.className === 'operator')
        makeOperation(e);
});
equals.addEventListener('click', evaluate);
clear.addEventListener('click', clearMemory);

function add(a, b) {
    return +a + +b;
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
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
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
function makeOperation(e) {
    if (num1) {
        num2 = displayValue;
        num1 = operate(operator, num1, num2);
    }
    else num1 = displayValue;
    operator = e.target.value;
    displayValue = '';
    updateDisplay();
}
function evaluate() {
    num2 = displayValue;
    displayValue = operate(operator, num1, num2);
    num1 = '';
    updateDisplay();
}
function clearMemory() {
    displayValue = '';
    num1 = '';
    num2 = '';
    operator = '';
    updateDisplay();
}
let displayValue = '';
let num1 = '';
let num2 = '';
let operator = '';
