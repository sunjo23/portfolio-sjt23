const display = document.querySelector(".display");
let currentValue="";
let prevValue="";
let currentOperator=null;

function appendNumber (number) {
    if (currentValue.length < 10) {
        if (currentValue === "0" && number != "."){
            currentValue = number.toString();
        } else {
            currentValue += number.toString();
        }
    }else {
        alert("no");
    }
    updateDisplay();
}

const updateDisplay = () => {
    display.innerText = currentValue || prevValue || "0"
};

const Clear = () => {
    currentValue="";
    prevValue="";
    operator=null;
    updateDisplay();
};

const Delete = () => {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
};

const appendOperator = (operator) => {
    if (currentValue === "" && prevValue !=""){
        currentOperator = operator;
    } else {
        calculateResult();
        currentOperator = operator;
        prevValue = currentValue;
        currentValue = " ";
    } 
};

const calculateResult = () => {
    let result;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (currentOperator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "/":
            result = prev / curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "%":
            result = (prev/100) * curr;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    currentOperation = null;
    prevValue = '';

    updateDisplay();
};
