const calculator = document.getElementById('calculator');
const previewDisplay = document.getElementById('preview');
const resultDisplay = document.getElementById('result');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

calculator.addEventListener('click', (e) => {
    if (e.target.className === 'digit') {
        digitPress(e);
    }
});
calculator.addEventListener('click', (e) => {
    if (e.target.className === 'operator')
        evaluateOperator(e);
});
calculator.addEventListener('click', updatePreview);
equals.addEventListener('click', evaluateEquals);
clear.addEventListener('click', clearMemory);

let before = '';
let current = '';
let operator = '';

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

function digitPress(e) {
    current += e.target.value;
    updateResultDisplay(current);
}
function updateResultDisplay(displayValue) {
    resultDisplay.textContent = displayValue;
}
function evaluateOperator(e) {
    if (before && operator) before = operate(operator, before, current); //no check for operator? Is there always one?
    else if (current) before = current;
    operator = e.target.value;
    current = '';
    updateResultDisplay(before);
}
function evaluateEquals() {
    if (before && operator) {
        before = operate(operator, before, current); //no check for operator? Is there always one?
        updateResultDisplay(before);
        current = '';
        operator = '';
    }
}
function clearMemory() {
    before = '';
    current = '';
    operator = '';
    updateResultDisplay('');
    previewDisplay.textContent = '';
}
function updatePreview(e) {
    previewDisplay.textContent += e.target.value;
}
