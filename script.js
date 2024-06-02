
//Initialize the variables;
let firstNum = "";
let currentNumo = "";
let operator;
let displayValue = "";

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

  let result = firstNum + secondNum;
  return result;
}

const substract = function (firstNum, secondNum) {
  let subs = firstNum - secondNum;
  return subs;
}

const multiply = function (firstNum, secondNum) {
  let mult = firstNum * secondNum;
  return mult;
}

const divide = function (firstNum, secondNum) {
  let div = firstNum / secondNum;
  return div;
}
//We select all of the numbers
const numbers = document.querySelectorAll(".number")
//For each we select the display and display the current number
numbers.forEach(button => {
  button.addEventListener('click', function () {
    const display = document.getElementById("display")
    displayValue = button.textContent
    display.innerHTML += displayValue;
  })
})

const operators = document.querySelectorAll(".operator")
operators.forEach((op) => op.addEventListener("click", function () {
  operator = op.textContent;
  console.log(operator);
}))

