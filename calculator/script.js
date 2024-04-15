// Calculator
function calculate() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let resultElement = document.getElementById("result");

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = '<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>';
        return;
    }

    // Perform calculation based on operation selected
    let result;
    switch (operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                resultElement.innerHTML = '<div class="alert alert-danger" role="alert">Cannot divide by zero.</div>';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.innerHTML = '<div class="alert alert-danger" role="alert">Invalid operation.</div>';
            return;
    }

    // Display the result
    resultElement.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + result + '</div>';
}