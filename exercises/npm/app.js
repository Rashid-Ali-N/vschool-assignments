const readlineSync = require("readline-sync")


const num1 = readlineSync.question("Please enter your first number: ")
const num2 = readlineSync.question("Please enter your second number: ")
const operation = ["add", "multiply", "subtract", "divide"]
const chooseOpp = readlineSync.keyInSelect(operation, 'Choose your operation fuckko!')

if (chooseOpp === 0) {
  console.log(+num1 + +num2)
}

if (chooseOpp === 1) {
  console.log(+num1 * +num2)
}

if (chooseOpp === 2) {
  console.log(+num1 - +num2)
}

if (chooseOpp === 3) {
  console.log(+num1 / +num2)
}

