// const axios = require("axios")

axios.get("https://api.vschool.io/Ali/todo/").then((response) => {
    const toDos = response.data
    for(let i =0; i < toDos.length; i++){
        createTodo(toDos[i])

    }
})

function createTodo(toDo) {
    const container = document.createElement("div")
    const h2 = document.createElement("h2")
    const list = document.getElementById("list")
    const p = document.createElement("list")
    const img = document.createElement("img")
    const checkbox = document.createElement("checkbox")
    const completed = document.createElement("button")

    h2.textContent = toDo.title
    img.src = toDo.imgUrl
    p.textContent = toDo.description
    
    checkbox.type = "checkbox"

   container.appendChild(h2)
   container.appendChild(p)
   container.appendChild(checkbox)
   container.appendChild(completed)
//    container.appendChild(img)
   
   list.appendChild(container)


}

form.checkbox.addEventListener("submit", completed)
