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




//Listens for display numbers

let buttons = document.getElementById('calculator')    
buttons.addEventListener("mousedown", function(event) {
    let display = document.getElementById("display-container")   //you need to just iterate over the buttons
     let elementText = event.target.innerText
     
    if (operator.value === "+") {
        console.log("you did it")
        display.textContent = "" + event.target.innerText      /// this works but its double firing the event because its listening to opeator as ell
        let displayValue2 = "" + elementText
        display.textContent = displayValue2
        
        } else {
          let displayValue = display.textContent + elementText
          display.textContent = displayValue

        }





    
    //console.log(displayValue)

    })

// listens for num1

buttons.addEventListener("mousedown", function(event) {
    let display = document.getElementById("display-container")   // i have grabbed this value here. need to notremove from array or not listen to it intially
        if (event.target.innerText == "+" && "value" in num1 != true) {
                let slicedNumber = display.textContent.slice(0, -1)
                num1.value = parseInt(slicedNumber)
                console.log(num1.value)
        }else {
          console.log('reee')
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
        if (event.target === operatorButtons[i] && "value" in num1 === true) {

          let slicedNumber = display.textContent.slice(0, -1)
          num2.value = parseInt(slicedNumber)

            console.log(num2.value)
            break
        }else if(event.target != operatorButtons[i]) {
            console.log('no')
        }
        
        
          else{
         
        
    }
    }
})



//operate
buttons.addEventListener("click", function(event) {
  let display = document.getElementById("display-container")
  let operatorButtons = document.getElementsByClassName("operator-button")       // bug: num2 is being reassigned in this part, listen for something else
  for (let i = 0; i < operatorButtons.length; i++) {
    if (num2.value === true) {
    console.log("YEHHHHHHHHHHHHHH")
  }else {
    console.log("lmaooo got em")
  }
  }





})