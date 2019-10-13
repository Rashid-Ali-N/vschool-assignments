// function capString (string){
//     return string.toUpperCase() + string.toLowerCase()
// }
// console.log(capString("Rashid Nellons"))

// function firstHalf (string) {
//     return string.slice (0, string.length / 2)
// }
// console.log(firstHalf ("FUCK"))

// function firstHalf (string) {
//     return  Math.floor(string.length / 2)
// }
// console.log(firstHalf ("FUCKy"))

// function halfString(string) {
//     let firstHalf = string.slice(0, string.length / 2).toUpperCase()
//     let secondHalf = string.slice(string.length / 2, string.legnth).toLowerCase()
//     return firstHalf + secondHalf
// }
// console.log(halfString("Hello"))

// function addition(num) {
// 	return num+1
// 	 }
// console.log(addition(4))

function convert(minutes) {
	return minutes * 60 + "minutes"
}

console.log(convert(17))