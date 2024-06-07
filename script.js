
//Initialize the variables;
let firstNum = "";
let currentNum = "";
let operator = "";

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.getElementById("clear-button")
const equal = document.getElementById("equals")
const display = document.getElementById("display")



//For each we select the display and display the current number
numbers.forEach(button => {
  button.addEventListener('click', function () {
    currentNum += button.textContent;
    display.textContent = currentNum;
  })
})

operators.forEach((op) => op.addEventListener("click", function () {
  operator = op.textContent;
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
  let result = operate(operator, firstNum, currentNum)
  currentNum = result
  display.textContent = result
})

//Operater function based on operator
function operate(operator, firstNum, currentNum) {
  let operation;
  firstNum = Number(firstNum)
  currentNum = Number(currentNum)
  if (operator === "+") {
    operation = firstNum + currentNum
  }
  else if (operator === "-") {
    operation = firstNum - currentNum
  }
  else if (operator === "*") {
    operation = firstNum * currentNum
  }
  else {
    operation = firstNum / currentNum
  }
  return operation;
}
