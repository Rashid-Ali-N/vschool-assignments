const form = document.inventory

form.addEventListener("submit", calculate)

function calculate() {
    event.preventDefault()
    const goomba = form.goomba.value
    const bombomb = form.bomb.value
    const cheep = form.cheep.value

    const output = document.getElementById("total")
    output.textContent = (+goomba *5) + (+bombomb *7) + (+cheep *11)
    return output.textContent + "$"
 
}
