let firstNum;
let secondNum;
let operator;
let displayValue = 0;
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

const add = function(firstNum, secondNum) {

  let result = firstNum + secondNum;
  return result;
}

const substract = function(firstNum, secondNum) {
  let subs = firstNum - secondNum;
  return subs;
}

const multiply = function(firstNum, secondNum) {
  let mult = firstNum * secondNum;
  return mult;
}

const divide = function(firstNum, secondNum) {
  let div = firstNum / secondNum;
  return div;
}
const numbers = document.querySelectorAll(".number")

numbers.forEach(button => {
  button.addEventListener('click', function() {
    const display = document.getElementById("display")
    displayValue = button.innerHTML
    display.innerHTML = displayValue;
  })
})

