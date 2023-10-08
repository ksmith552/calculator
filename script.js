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
    let display = document.getElementById("display-container")   //you need to just iterate over the buttons
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
       //let operatorButtons = document.getElementsByClassName("operator-button")  
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



// Listens for operator
buttons.addEventListener("mouseup", function(event){
    let display = document.getElementById("display-container")
    let operatorButtons = document.getElementsByClassName("operator-button")
    if (event.target.classList.contains("operator-button"))  {
        operator.value = event.target.value
        console.log("we have  op")
    }else{
        console.log("no operator here")
    }
})


// listens for num1
buttons.addEventListener("mouseup", function(event) {
    let display = document.getElementById("display-container")  
        if ("value" in num1 === true) {
            console.log('we have num1')
        }else if (event.target.classList.contains("operator-button") && "value" in num1 != true){   //need to refactor this, operatovr value is going missing
            let number1 = display.textContent
            num1.value = parseInt(number1)
            console.log("yooooo we did uttttt")
        }
}) 


//num 2 
buttons.addEventListener("mousedown", function(event) {
    let display = document.getElementById("display-container")
    let operatorButtons = document.getElementsByClassName("operator-button")       // START HERE: now thatthe event is registered. clear the display yext and listen for num2 untill another operator or equals sign is pressed
    
        if (event.target.classList.contains("operator-button") && "value" in num1 === true && "value" in operator === true) {
            let number2 = display.textContent
            num2.value = parseInt(number2)
            console.log("we got em boiii")
            
        }else if (event.target === equals && "value" in num1 === true && "value" in operator === true) {
            let number2 = display.textContent
            num2.value = parseInt(number2)
            console.log("we got em boiii")
        }else {
            console.log('nopppppppppp')
        }
    
})


/* Notes: we finally have all listeners in place to gather all the variables. now we just need to make the operate function work
once operate works we will have to refactor the code accept all the operators

refactor display number event listener to oonly be listening for number buttons
 MAKE LOOK GOOD
*/


