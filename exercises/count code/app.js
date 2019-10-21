let array = ["code", "code", "cool"]
let count = 0

function countCode(array) {  
    for (i = 0; i < array.length; i++)
   if( array[i] === "code"){
       count +=1
   } return count
} 

console.log(countCode(array))