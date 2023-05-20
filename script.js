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
            displayTop.textContent = "";
        }
    });
});

operand.forEach((key) => {
    key.addEventListener("click", function (e) {
        const keyPressed = e.target.textContent;
        if (parseInt(keyPressed) >= 1 || parseInt(keyPressed) <= 9) {
            displayBot.textContent += keyPressed;
        }
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

    let nums = content.split(/[-+*/]/);
    let operator = content.match(/[-+*/]/)[0];

    let n1 = parseInt(nums[0]);
    let n2 = parseInt(nums[1]);

    let result;
    switch (operator) {
        case "+":
            result = add(n1, n2);
            break;
        case "-":
            result = substract(n1, n2);
            break;
        case "*":
            result = multiply(n1, n2);
            break;
        case "/":
            result = divide(n1, n2);
            break;
        default:
            console.log("Operador no válido");
            return;
    }

    displayBot.textContent = result;
});

function add(a, b) {
    return a + b;
}

function substract(a, b) {
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

function ac() {
    // Add your logic for AC function here
}

function del() {
    // Add your logic for del function here
}
