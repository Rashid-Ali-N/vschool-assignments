var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function produceArray() {
     vegetables.pop() 
     fruit.shift()
    index = fruit.indexOf("orange")
    fruit.push(index)
    length = vegetables.length
    vegetables.push(length)
    food = fruit.concat(vegetables)
    food.splice(4,2)
    food.reverse()
    food.join()
    return food
}
console.log(produceArray())

// function produceArray() {
//     return fruit.indexOf("orange")
// }
// console.log(produceArray())