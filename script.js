const command = document.querySelectorAll(".command");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const displayTop = document.getElementById("displayTop");
const displayBot = document.getElementById("displayBot");
const result = document.getElementById("result");

console.log(operand);
console.log(command);
console.log(operator);

command.forEach((key) => {
    key.addEventListener("click", function (e) {
        const keyPressed = e.target.textContent;
        if (keyPressed === "AC") {
            displayBot.textContent = "";
            displayTop.textContent = "-";
        } else if (keyPressed === "DEL") {
            displayBot.textContent = displayBot.textContent.slice(0, -1);
        }
    });
});

operand.forEach((key) => {
    key.addEventListener("click", function (e) {
        const keyPressed = e.target.textContent;
        displayBot.textContent += keyPressed;
    });
});

operator.forEach((key) => {
    key.addEventListener("click", function (e) {
        const keyPressed = e.target.textContent;
        displayBot.textContent += keyPressed;
    });
});

result.addEventListener("click", function () {
    let content = displayBot.textContent;

    let nums = content.split(/[-+*/!]/);
    let operators = content.match(/[-+*/!]/g);
    console.log(operators.length)
    let result = parseInt(nums[0]);
    for (let i = 0; i < operators.length; i++) {
        let n = parseInt(nums[i + 1]);

        switch (operators[i]) {
            case "+":
                result = add(result, n);
                break;
            case "-":
                result = subtract(result, n);
                break;
            case "*":
                result = multiply(result, n);
                break;
            case "/":
                result = divide(result, n);
                break;
            case "!":
                result = factorial(nums[0]);
                break;
            default:
                console.log("Operador no válido");
                return;
        }
    }

    displayTop.textContent = result.toFixed(2);
    displayBot.textContent = "";
});

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

function factorial(a) {
    if (a === 0) return 1;

    return a * factorial(a - 1);
}
