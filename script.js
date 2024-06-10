
//Initialize the variables;
let firstNum = "";
let currentNum = "";
let operator = "";

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clear = document.getElementById("clear-button")
const equal = document.getElementById("equals")
const display = document.getElementById("display")
const del = document.getElementById("delete-button")
const float = document.getElementById("float-button")


//For each we select the display and display the current number
numbers.forEach(button => {
  button.addEventListener('click', function () {
    if (currentNum.length <= 5) {
      currentNum += button.textContent;
      display.textContent = currentNum;
    }
  })
})

operators.forEach((op) => op.addEventListener("click", function () {
  operator = op.textContent;
  firstNum = currentNum;
  currentNum = "";
}))

clear.addEventListener("click", function () {
  clearScreen()
})

equal.addEventListener("click", function () {
  if (currentNum != "" && firstNum != "") {
    let result = operate(operator, firstNum, currentNum)
    currentNum = result
    display.textContent = result
    console.log(result)
    if (result === Infinity) {
      display.textContent = "Cannot divide by 0!"
      setTimeout(clearScreen, 2000);
    }
  }
})

del.addEventListener("click", function () {
  let lastCharacterRemoval = currentNum.slice(0, -1)
  currentNum = lastCharacterRemoval;
  display.textContent = currentNum;
})

float.addEventListener("click", function () {
  addFloat()
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
  else if (operator === "/") {
    operation = firstNum / currentNum
  }
  else {
    operation = firstNum % currentNum
  }
  operation = roundNumber(operation)
  return operation
}

function clearScreen() {
  operator = "";
  firstNum = "";
  currentNum = "";
  display.textContent = "0";
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function addFloat() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
  }
}
