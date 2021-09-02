const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

calculator.addEventListener('click', inputDigit);
calculator.addEventListener('click', (e) => {
    if (e.target.className === 'operator')
        evaluateOperator(e);
});
equals.addEventListener('click', evaluateEquals);
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
        updateDisplay(displayValue);
    }
}
function updateDisplay(displayValue) {
    display.textContent = displayValue;
}
function evaluateOperator(e) {
    if (previousValue) {
        currentValue = displayValue;
        previousValue = operate(operator, previousValue, currentValue);
    }
    else previousValue = displayValue;
    operator = e.target.value;
    displayValue = '';
    updateDisplay(previousValue);
}
function evaluateEquals() {
    currentValue = displayValue;
    let result = '';
    if (previousValue) {    //doesn't  if there's just one number
        result = operate(operator, previousValue, currentValue);
    }
    displayValue = '';
    previousValue = '';
    updateDisplay(result);
}
function clearMemory() {
    displayValue = '';
    previousValue = '';
    currentValue = '';
    operator = '';
    updateDisplay('');
}
let displayValue = '';
let previousValue = '';
let currentValue = '';
let operator = '';
