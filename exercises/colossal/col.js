const ask = require("readline-sync")
let isAlive = true;
let hasWon = false;
let gotAway = false;

console.log("Hello how are you, welcome.")
const name = ask.question("What is your name?")

console.log(`Welcome to the fight ${name}, the world has been taken over by evil. Defeat the enemies to save humanity`)

// if(isAlive = true) {
// console.log(maingame())
// }
// while(isAlive & !hasWon) {
//     let living = ask.keyIn("Are you alive? (y/n)", {limit: "yn"})
//     if (living === "y"){
//         console.log("keep playing")
//         maingame()
//     } else if (living === 'n') {
//         isAlive = false
//         console.log('you are dead')
//     }
// }



const hero = new Hero ("El", 500, 50)

const ghost = new Enemy("The Fallen One", 100, 100, "Holy Bible")
const serpent = new Enemy('The Great Serpent', 590, 75, "Holy Grail")
const beast = new Enemy("The Image of The Beast", 300, 75, "Crucifix")

function Hero (name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

function Enemy (name, hp, ap, item){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.item = item;
}

const enemiesArr = [ghost, serpent, beast]
const itemsArr = ["Holy Bible", "Crucifix", "Holy Grail" ]
let allItems = true

let inventoryArr = []

let randomEnemy

while(isAlive & !hasWon) {
   let choice = ask.keyIn("Do you wanna walk(w), Inventory(i), or Quit(q)?", {limit: "wiq"})
    if (choice === "w"){
        isAlive = true
         walk()
    } else if (choice === "i") {
        isAlive = true
        console.log(inventoryArr)
    } else {
        isAlive = false
        console.log(`
        
        
        )   )          (    (      (      ____ 
     ( /(( /(          )\ ) )\ )   )\ )  |   / 
     )\())\())    (   (()/((()/(( (()/(  |  /  
    ((_)((_)\     )\   /(_))/(_))\ /(_)) | /   
   __ ((_)((_) _ ((_) (_))_(_))((_|_))_  |/    
   \ \ / / _ \| | | |  |   \_ _| __|   \(      
    \ V / (_) | |_| |  | |) | || _|| |) )\     
     |_| \___/ \___/   |___/___|___|___((_)
     `)
    }
}
     // closing while loop


function walk () {
    let random = Math.floor(Math.random()*3)
    if(random === 2){
        enemyEncounter()
    } else{
        console.log("Got away safely")
       
    }
}



function enemyEncounter() {
    let random = Math.floor(Math.random()*enemiesArr.length)
    randomEnemy = enemiesArr[random]
    console.log(`${randomEnemy.name} has appeared to harvest you..`)
    let escape = ask.keyIn("Do you wanna pray(p), attack(a)", {limit: "pa"})
    if (escape === "r"){
        run(randomEnemy)
    } else {
        fight(randomEnemy)
     }
}

function fight (enemy){
        enemyAttack(enemy)
        heroAttack(enemy)
    while(hero.hp > 0 && enemy.hp > 0 && !gotAway){
        let action = ask.keyIn('Would you like to continue attacking [a], pray [p], or use your item [u]', {limit: 'apu'})
        if(action === 'a'){
            enemyAttack(enemy)
            heroAttack(enemy)
        }else if (action === 'p'){
            run(enemy)
        }else if(action === 'u'){
            enemy.hp = enemy.hp-100
            console.log(`You used the power of your item to punish ${enemy.name}. Its hp is ${enemy.hp}.`)
            enemyAttack(enemy)
            if( enemy.hp < 0) {
                hero.hp = 500
                console.log("You've regained health by the grace of God.")
                console.log(`Congrats, you killed ${enemy.name}.`)
                inventoryArr.push(enemy.item)
                
            }

        }
    }
    if (hero.hp <= 0) {
        isAlive = false
        console.log(`
        
        
        )   )          (    (      (      ____ 
     ( /(( /(          )\ ) )\ )   )\ )  |   / 
     )\())\())    (   (()/((()/(( (()/(  |  /  
    ((_)((_)\     )\   /(_))/(_))\ /(_)) | /   
   __ ((_)((_) _ ((_) (_))_(_))((_|_))_  |/    
   \ \ / / _ \| | | |  |   \_ _| __|   \(      
    \ V / (_) | |_| |  | |) | || _|| |) )\     
     |_| \___/ \___/   |___/___|___|___((_)
     `)
    }else if (enemy.hp <=0) {
        enemiesArr.splice(enemiesArr.indexOf(enemy), 1)
        if(enemiesArr.length === 0){
            hasWon = true;
            console.log("You've defeated evil itself")
        }
    }
    gotAway = false;
}

function run(enemy) {
    let random = Math.floor(Math.random()*3)
    if(random === 2){
        isAlive = true;
        console.log("You've frightened the demon..")
        gotAway = true
    } else {
        enemyAttack(enemy)
    }
}

function enemyAttack(randomEnemy){
    // console.log('hero hp', hero.hp)
    // console.log('randomEnemy ap', randomEnemy.ap)

    hero.hp -= randomEnemy.ap 
    // console.log(hero.hp -= randomEnemy.ap )

    console.log(`${randomEnemy.name} has attacked you. Your hp is ${hero.hp}.`)

   
   
}

function heroAttack (enemy) {
    enemy.hp -= hero.ap
    console.log(`You attacked ${enemy.name}. Its hp is ${enemy.hp}.`)
    if (enemy.hp <= 0) {
        hero.hp = 500
        console.log("youve regained health")
        console.log(`Congrats, you killed ${enemy.name}.`)
        inventoryArr.push(enemy.item)
        
        console.log(`You've recieved ${enemy.item}`)
    // } else if (hero.hp <= 0) {
    //     isAlive = false
    //     console.log(`You're dead`)
    }
}

// function itemAttack(enemy) {
//     if (inventoryArr.push(enemy.item)) {
//         Enemy.hp = Enemy.hp-100
//     } else {
//         fight (enemy)
//     }
// }
// function regainHealth() {
//     if  (hero.hp <= 0) {
//        hero.hp = 500
//       console.log("youve regained health")
//     }
// }

// function randomItem() {
//     let randItm = Math.floor(Math.random()*itemsArr.length)
//     itemSel = itemsArr[randItm]
//     inventoryArr.push(randItm)
//     console.log(`You've recieved ${randomEnemy.item}`)
// }

// function random1(ran) {
//    return Math.floor(Math.random())
// }

// console.log(random1(5))