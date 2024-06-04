
//Initialize the variables;
let firstNum = "";
let currentNum = "";
let operator = "";

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.getElementById("clear-button")
const equal = document.getElementById("equals")
const display = document.getElementById("display")
//Operater function based on operator
function operate(operator, firstNum, secondNum) {
  let result;
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum)
      break
    case "-":
      result = substract(firstNum, secondNum)
      break
    case "*":
      result = multiply(firstNum, secondNum)
      break
    case "/":
      result = divide(firstNum, secondNum)
      break
  }
  return result;
}

//functions that do the math
const add = function (firstNum, secondNum) {

  return firstNum + secondNum;
}

const substract = function (firstNum, currentNum) {
  return firstNum - currentNum;

}

const multiply = function (firstNum, currentNum) {
  return firstNum * currentNum;

}

const divide = function (firstNum, currentNum) {
  return firstNum / currentNum;
}



//For each we select the display and display the current number
numbers.forEach(button => {
  button.addEventListener('click', function () {
    currentNum += button.textContent
    display.textContent = currentNum;;
  })
})

operators.forEach((op) => op.addEventListener("click", function () {
  operator = op;
  firstNum = currentNum;
  currentNum = "";
}))

clear.addEventListener("click", function () {
  operator = "";
  firstNum = "";
  currentNum = "";
  display.textContent = currentNum;
})

equal.addEventListener("click", function () {
  operate()
  display.textContent = operate(operator, firstNum, currentNum)
})
