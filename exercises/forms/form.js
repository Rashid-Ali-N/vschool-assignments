const form = document.multiply

form.addEventListener("submit", multiplyNums)


function multiplyNums (event) {
    event.preventDefault()
    const leftNum = form.leftNumber.value
    const rightNum = form.rightNumber.value
    const output = document.getElementById("answer")
    output.textContent = +leftNum * +rightNum
    
    console.log(+leftNum * +rightNum)

}

