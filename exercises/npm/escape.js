const readlineSync = require("readline-sync")

let hasKey = false
let playing = true
const options = ["Put hand in hole", "Find the key", "Open the dooor"]


while(playing === true) {
const chooseFate = readlineSync.keyInSelect(options, 'Choose your fate :P')


    if (chooseFate === 0){
        console.log("You're dead fucko")
            playing = false
    } else if(chooseFate === 1){
        hasKey = true
        console.log("Continue wise sir...")
    }else {
        chooseFate === 2
        if (hasKey === false) {
            playing = true
            
        console.log("The door is locked!") 
    
    }     else if (hasKey === true) {
        
        playing = false
        console.log("You live for now...")
            
        }
    }
}  
