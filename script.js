function printResult(message) {
    document.getElementById('result').innerHTML = message;
}

function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    printResult(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    printResult(`The difference of ${num1} and ${num2} is ${num1 - num2}.`);
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    printResult(`The product of ${num1} and ${num2} is ${num1 * num2}.`);
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    printResult(`The quotient of ${num1} and ${num2} is ${num1 / num2}.`);
}

function modulus() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    printResult(`The remainder of ${num1} and ${num2} is ${num1 % num2}.`);
}
