// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 10; i > -1; i--) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++) {
        // console.log(fruit[i])
// }
// const array = []
// for (let i = 0; i < 10; i++) {
//     array.push(i)
// }
// console.log(array)

// for (let i = 0; i < 100; i = i + 2) {
    
//         console.log(i)
    
//     }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// const array = []
// for (let i = 0; i < 4; i++) {
//     if (i % 2 === 0)
//     array.push(fruit[i])
// }
// console.log(array)
const arrayName = []
const arrayOccup = []
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
//   for (let i = 0; i < peopleArray.length; i++) {
//       arrayName.push(peopleArray[i].name)
//   } 
//   console.log(arrayName)

//   for (let i = 0; i < peopleArray.length; i++) {
//     arrayName.push(peopleArray[i].name)
//     arrayOccup.push(peopleArray[i].occupation)   
    
// } 
// console.log(arrayName, arrayOccup)

// for (let i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0){
//         arrayName.push(peopleArray[i].name)
//     }
//     if (i % 2 === 1){   
//         arrayOccup.push(peopleArray[i].occupation)   
        
//     } 
// }

//     console.log(arrayName, arrayOccup)

const matrix = []

for (let i = 0; i < 3; i++) {
    matrix.push(0)
       for (let j = 0; j < 3; j++)
        
 
 matrix.push([i, j])

}
console.log(matrix)