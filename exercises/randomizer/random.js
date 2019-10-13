passLength = 10

function randomPass(passLength) {
    const pass = [];

    for(let i = 0; i < passLength; i++){
    password = string.fromCharCode(Math.floor((Math.random()*94) + 32));
    pass.push(password)
    }
    return pass.join("")
}


console.log(randomPass(10))