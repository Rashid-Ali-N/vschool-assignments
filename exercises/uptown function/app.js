var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// function strLyrics (){
//     return lyrics.join(" ")
// }

// console.log(strLyrics())

// function bckLyrics (){
//     lyrics.reverse()
//     return lyrics.join(" ")
     
// }

// console.log(bckLyrics())

// function everyOther (arr) {
//     let even = [];
//     for (let i = 0; i < arr.length; i++ ) {
//         if (i % 2 === 0) {
//      even.push(arr[i])
            
//     }
// }
// return even;
// }
// console.log(everyOther(lyrics))

function bckLyrics (arr){
    let even = [];
    for (let i = 0; i < arr.length; i++ ) {
        if (i % 2 + 2 === 0) {
        even.push.reverse(arr[i])
        }
    }
}
console.log(backLyrics(lyrics))