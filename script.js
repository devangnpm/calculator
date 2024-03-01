function add(num1,num2) {
    let result =  num1+num2;
    return result;
}

function subtract(num1,num2) {
    let result = num1-num2;
    return result;
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

function divide(num1,num2) {
    let result =  num1 / num2;
    return result;
}

function operate(operator,num1,num2) {
    switch (operator) {
        case '+':
            add(num1,num2);
            break;
    
        case '-':
            subtract(num1,num2);
            break;
        
        case '*':
            multiply(num1,num2);
            break;
        
        case '/':
            divide(num1,num2);
            break;

        default:
            return "Invalid operator";
    }
}