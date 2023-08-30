let num1 = {}
let num2 = {}
let operator= {}

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














/*numberButtons.addEventListener("click", function(event) {
    let display = document.getElementById("display-container")
     let elementText = event.target.innerText
    let num1 = elementText
    if (elementText == "+") {
        
    }
    console.log(num1)
    //display.textContent = displayValue
    //console.log(parseInt(displayValue))
})
*/
/*numberButtons.addEventListener("click", function(event) {
    let display = document.getElementById("display-container")
     let elementText = event.target.innerText
    let num2  = display.textContent + elementText
    if (event.target.innerText == "=") {
       return num2
        //add(num1, num2)
    }
    
    //display.textContent = displayValue
    //console.log(parseInt(displayValue))
})

*/

//Listens for display numbers

let buttons = document.getElementById('calculator')
buttons.addEventListener("click", function(event) {
    let display = document.getElementById("display-container")   //you need to just iterate over the buttons
     let elementText = event.target.innerText
     
    let displayValue = display.textContent + elementText
    
    display.textContent = displayValue
    //console.log(displayValue)

    })

// listens for num1

buttons.addEventListener("click", function(event) {
    let display = document.getElementById("display-container")   // i have grabbed this value here. need to notremove from array or not listen to it intially
        if (event.target.innerText == "+") {
                let number = display.textContent.slice(0, -1)
                num1.value = parseInt(number)
                console.log(num1.value)
        }
        
}) 

// Listens for operator

buttons.addEventListener("mousedown", function(event){
    let display = document.getElementById("display-container")
    let operatorButtons = document.getElementsByClassName("operator-button")
        for (let i = 0; i < operatorButtons.length; i++) {
            operator.value = event.target.value;

            
            }
        //console.log(operator)
    })

// listen for num2

buttons.addEventListener("mouseup", function(event) {
    let display = document.getElementById("display-container")
    let operatorButtons = document.getElementsByClassName("operator-button")       // START HERE: now thatthe event is registered. clear the display yext and listen for num2 untill another operator or equals sign is pressed
    for (let i = 0; i < operatorButtons.length; i++) {
        if (event.target == operatorButtons[i]) {
            console.log('ye')
        }else {
         
        
    }
    }
})



// theabove function only takes a single inpout at a time. this needs to take an entire string look at previous projects. will be dom related