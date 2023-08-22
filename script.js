let num1 = ""
let num2 = ""
let operator = ""

// Create a Function for Addition
function add(a, b) {
    return a + b
}


// Create a Function for Subtraction
function subtract(a, b) {
    return a - b
}

// Create a Function for Multiplication
function multiply(a, b) {
    return a * b
}

// Create a Function for Division
function divide(a, b) {
    return a / b
}

// Create a function that take an operator and 2 numbers, and then calls an operating function on the numbers
function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else if (operator === "/") {
        return divide(a, b)
    } else { console.log("Error: Please enter a valid operator.")}
}








let numberButtons = document.getElementById('calculator')

numberButtons.addEventListener("click", function(event) {
    let display = document.getElementById("display-container")
     let elementText = event.target.innerText
    let displayValue = display.textContent + elementText
    display.textContent = displayValue
    console.log(parseInt(displayValue))
})





// theabove function only takes a single inpout at a time. this needs to take an entire string look at previous projects. will be dom related