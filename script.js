const calculator = document.getElementById('calculator');
const previewDisplay = document.getElementById('preview');
const resultDisplay = document.getElementById('result');
const equals = document.getElementById('equals');
const allClear = document.getElementById('allClear');
const dot = document.getElementById('dot');
const backspace = document.getElementById('clear');

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
allClear.addEventListener('click', clearMemory);
backspace.addEventListener('click', clearLastInput);
// dot.addEventListener('click', InputDot);

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
    if (e.target.value === '.') e.target.disabled = true;
    current += e.target.value;
    updateResultDisplay(current);
}
function updateResultDisplay(displayValue) {
    if (displayValue == Infinity) {
        displayValue = "can't do that!";
    }
    resultDisplay.textContent = displayValue;
}
function evaluateOperator(e) {
    if (before && operator) before = operate(operator, before, current); //no check for operator? Is there always one?
    else if (current) before = current;
    operator = e.target.value;
    clearCurrent()
    before = roundNumber(+before);
    updateResultDisplay(before);
}
function evaluateEquals() {
    if (before && operator) {
        before = operate(operator, before, current); //no check for operator? Is there always one?
        before = roundNumber(+before);
        updateResultDisplay(before);
        clearCurrent()
        operator = '';
    }
}
function clearMemory() {
    before = '';
    clearCurrent()
    operator = '';
    // updateResultDisplay('');
    resultDisplay.textContent = '';
    previewDisplay.textContent = '';
}
function updatePreview(e) {
    previewDisplay.textContent += e.target.value;
}
function roundNumber(number) {
    let rounded = number.toFixed(5);
    while (rounded.charAt(rounded.length - 1) === '0') {
        rounded = rounded.slice(0, -1);
    }
    if (rounded.charAt(rounded.length - 1) === '.') {
        rounded = rounded.slice(0, -1);
    }
    return rounded;
}
function clearCurrent() {
    current = '';
    dot.disabled = false;
}
function clearLastInput() {
    current = current.slice(0, -1);
    updateResultDisplay(current);
}