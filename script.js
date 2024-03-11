const btn0 = document.querySelector('button[value="0"]');
btn0.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 0; // Update the value of the display input field
});

const btn1 = document.querySelector('button[value="1"]');
btn1.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 1; // Update the value of the display input field
});

const btn2 = document.querySelector('button[value="2"]');
btn2.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 2; // Update the value of the display input field
});

const btn3 = document.querySelector('button[value="3"]');
btn3.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 3; // Update the value of the display input field
});

const btn4 = document.querySelector('button[value="4"]');
btn4.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 4; // Update the value of the display input field
});

const btn5 = document.querySelector('button[value="5"]');
btn5.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 5; // Update the value of the display input field
});

const btn6 = document.querySelector('button[value="6"]');
btn6.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 6; // Update the value of the display input field
});

const btn7 = document.querySelector('button[value="7"]');
btn7.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 7; // Update the value of the display input field
});

const btn8 = document.querySelector('button[value="8"]');
btn8.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 8; // Update the value of the display input field
});

const btn9 = document.querySelector('button[value="9"]');
btn9.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += 9; // Update the value of the display input field
});

const btnAdd = document.querySelector('button[name="plus"]');
btnAdd.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += ' + '; // Update the value of the display input field
});

const btnSub = document.querySelector('button[name="minus"]');
btnSub.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += ' - '; // Update the value of the display input field
});

const btnMultiply = document.querySelector('button[name="times"]');
btnMultiply.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += ' * '; // Update the value of sthe display input field
});

const btnDivision = document.querySelector('button[name="split"]');
btnDivision.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    display.value += ' / '; // Update the value of the display input field
});

const btnUndo = document.querySelector('button[name="undo"]');
btnUndo.addEventListener('click', () => {
    console.log('Button clicked Undo');
    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
});

const btnClear = document.querySelector('button[name="clear"]');
btnClear.addEventListener('click', () => {
    console.log('Button clicked AC');
    const display = document.querySelector('#display');
    display.value = '';
});

const btnEqual = document.querySelector('button[name="equal"]');
btnEqual.addEventListener('click', () => {
    console.log('Button clicked');
    const display = document.querySelector('#display');
    const equation = display.value;
    const [num1, operator, num2] = equation.split(' ');
    const result = operate(operator, parseFloat(num1), parseFloat(num2));
    console.log(operate(operator,num1,num2));
    display.value = result;
});



function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      return "Invalid operator";
  }
}
