const calculator = document.getElementById('calculator');
const previewDisplay = document.getElementById('preview');
const resultDisplay = document.getElementById('result');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

calculator.addEventListener('click', inputDigit);
calculator.addEventListener('click', (e) => {
    if (e.target.className === 'operator')
        evaluateOperator(e);
});
calculator.addEventListener('click', updatePreview);
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
        updateResultDisplay(displayValue);
    }
}
function updateResultDisplay(displayValue) {
    resultDisplay.textContent = displayValue;
}
function evaluateOperator(e) {
    if (previousValue) {
        currentValue = displayValue;
        previousValue = operate(operator, previousValue, currentValue);
    }
    else previousValue = displayValue;
    operator = e.target.value;
    displayValue = '';
    updateResultDisplay(previousValue);
}
function evaluateEquals() {
    currentValue = displayValue;
    let result = '';
    if (previousValue) {    //doesn't  if there's just one number
        result = operate(operator, previousValue, currentValue);
    }
    displayValue = '';
    previousValue = '';
    updateResultDisplay(result);
}
function clearMemory() {
    displayValue = '';
    previousValue = '';
    currentValue = '';
    operator = '';
    updateResultDisplay('');
    previewDisplay.textContent = '';
}
function updatePreview(e){
previewDisplay.textContent += e.target.value;
}
let displayValue = '';

let previousValue = '';
let currentValue = '';
let operator = '';
