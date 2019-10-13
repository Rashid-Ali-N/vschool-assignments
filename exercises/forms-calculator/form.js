const form = document.multiply
const form2 = document.add
const form3 = document.minus

form.addEventListener("submit", multiplyNums)


function multiplyNums (event) {
    event.preventDefault()
    const leftNum = form.leftNumber.value
    const rightNum = form.rightNumber.value
    const output = document.getElementById("answer")
    output.textContent = +leftNum * +rightNum

    
    console.log(+leftNum * +rightNum)

}
form2.addEventListener("submit", addNums)
function addNums (event) {
    event.preventDefault(event)
    const leftNum2 = form2.leftNumber2.value
    const rightNum2 = form2.rightNumber2.value
    const output = document.getElementById("answer2")
    output.textContent = +leftNum2 + +rightNum2
}


form3.addEventListener("submit", subNums)
function subNums (event) {
    event.preventDefault(event)
    const leftNum3 = form3.leftNumber3.value
    const rightNum3 = form3.rightNumber3.value
    const output = document.getElementById("answer3")
    output.textContent = +leftNum3 - +rightNum3
}