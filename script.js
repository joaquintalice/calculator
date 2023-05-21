const command = document.querySelectorAll(".command");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const displayTop = document.getElementById("displayTop");
const displayBot = document.getElementById("displayBot");
const result = document.getElementById("result");
const dot = document.getElementById("dot");



command.forEach((key) => {
    key.addEventListener("click", DEL)
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

dot.addEventListener("click", function () {
    displayBot.textContent += dot.textContent;
});



function operate() {
    let content = displayBot.textContent;

    let nums = content.split(/[-+*/!%]/);
    let operators = content.match(/[-+*/!%]/g);
    console.table(nums)
    console.table(operators)
    if (nums.length === 1 || operators.length === 0) {
        displayBot.textContent = "Syntax error";

        setTimeout(() => {
            displayBot.textContent = "";
        }, 1200);
    }

    let result = parseFloat(nums[0]);

    for (let i = 0; i < operators.length; i++) {
        let n = parseFloat(nums[i + 1]);

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
            case "%":
                result = module(result, n);
                break;
            default:
                displayBot.textContent("Syntax error");
                return;
        }
    }
    if (isNaN(result)) {
        let temp = displayBot.textContent;
        displayBot.textContent = "Syntax error";
        setTimeout(() => {
            displayBot.textContent = temp;
        }, 1200);
    } else {
        displayTop.textContent = displayBot.textContent;
        displayBot.textContent = result.toFixed(2);
    }
}

result.addEventListener("click", operate);

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

function module(a, b) {
    return ((a % b + b) % b);
}

function DEL(e) {
    const keyPressed = e.target.textContent;
    if (keyPressed === "AC" || keyP === "AC") {
        displayBot.textContent = "";
        displayTop.textContent = "-";
    } else if (keyPressed === "DEL" || keyP === "DEL") {
        displayBot.textContent = displayBot.textContent.slice(0, -1);
    }
};

function keyboardFunctionality(e) {
    const getKeys = document.querySelectorAll(`button[data-key="${e.code}"]`);
    keyP = getKeys[0].textContent;

    switch (keyP) {
        case "=":
            operate();
            break;
        case "DEL":
            DEL(e);
            break;
        case "AC":
            DEL(e);
            break;
        default:
            displayBot.textContent += keyP;
    }

    console.log(keyP);
}
window.addEventListener("keyup", keyboardFunctionality);