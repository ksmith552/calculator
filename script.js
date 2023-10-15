// Globals :'(
let num1 = {}
let num2 = {}
let operator= {}
let displayValue2 = {value: ""}
let equals = document.getElementById('operate-button')

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

//Listens for display numbers
let buttons = document.getElementById('calculator')    
buttons.addEventListener("mousedown", function(event) {
    let display = document.getElementById("display-container")   
    let numberButtons = document.getElementsByClassName("number-buttons")
    let elementText = event.target.innerText
   if (event.target.classList.contains("number-button") && "value" in num1 === true && "value" in operator === true) {
        displayValue2.value = displayValue2.value + elementText
        display.textContent = displayValue2.value
        console.log("reee")
    } else if (event.target.classList.contains("number-button")) {
          let displayValue = display.textContent + elementText
          display.textContent = displayValue
        }
})

//operate
buttons.addEventListener("mouseup", function(event) {
    let display = document.getElementById("display-container")  
    if (event.target.classList.contains("operator-button") && "value" in num2 === true) {
        console.log(operate(num1.value, operator.value, num2.value)) 
        solution = operate(num1.value, operator.value, num2.value)
        num1.value = solution
        display.textContent = solution
        num2.value = ""
        operator.value = ""
        displayValue2.value = ""
    } else if (event.target === equals && "value" in num2 === true) {
        console.log(operate(num1.value, operator.value, num2.value)) 
        solution = operate(num1.value, operator.value, num2.value)
        display.textContent = solution
        delete num1.value
        delete num2.value
        delete operator.value
        displayValue2.value = "" 
    }else {
        console.log("lmaooo got em")
        }
})
//Decimal button control
let decimalButton = document.getElementById("decimal-button")
decimalButton.addEventListener("click", function(event) {
    decimalButton.disabled = true

})

// Get operator
buttons.addEventListener("mouseup", function(event){
    let display = document.getElementById("display-container")
    let operatorButtons = document.getElementsByClassName("operator-button")
    if (event.target.classList.contains("operator-button"))  {
        operator.value = event.target.value
        decimalButton.disabled = false
        console.log("we have  op")
    }else{
        console.log("no operator here")
    }
})


// Get num1
buttons.addEventListener("mouseup", function(event) {
    let display = document.getElementById("display-container")  
        if ("value" in num1 === true) {
            console.log('we have num1')
        }else if (event.target.classList.contains("operator-button") && "value" in num1 != true){   
            let number1 = display.textContent
            num1.value = parseFloat(number1)
            console.log("yooooo we did uttttt")
        }
}) 


// Get num2 
buttons.addEventListener("mousedown", function(event) {
    let display = document.getElementById("display-container")
    let operatorButtons = document.getElementsByClassName("operator-button")
        if (event.target.classList.contains("operator-button") && "value" in num1 === true && "value" in operator === true) {
            let number2 = display.textContent
            num2.value = parseFloat(number2)
            console.log("we got em boiii")
        }else if (event.target === equals && "value" in num1 === true && "value" in operator === true) {
            let number2 = display.textContent
            num2.value = parseFloat(number2)
            console.log("we got em boiii")
        }else {
            console.log('nopppppppppp')
        }
})

// Clear values
let clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(event) {
    let display = document.getElementById("display-container")
    display.textContent = ""
    delete num1.value
    delete num2.value
    delete operator.value
    displayValue2.value = ""
    decimalButton.disabled = false
})

