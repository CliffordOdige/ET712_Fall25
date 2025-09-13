/*
Clifford Odige
lab5_function_object
Sept 11, 2025
*/

console.log("Clifford Odige")

// Example 1: Function

let greet = function(username){
    console.log(`Welcome to function ${username}`)
}

greet("Alice")

greeting = (username) => {
    console.log(`Good afternoon ${username}`)
}

greeting("Bob")

// Example 2: Default parameter

function rand_number(x = 1){
    for(let n = 1; n <= x; n++){
        let num = Math.ceil(Math.random() * 9)
        console.log(`${num}`)
    }
}

rand_number()
rand_number(3)

// Example 3: Spread

let numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n---- Example 3: spread ----`)
console.log(`The maximum number is = ${max_number}`)

// Example 4: Object

const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    car_description: function(){
        return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
    }
}

console.log(car.car_description())

// Example 5: Object

const myMath = {
    perimeter: function(w = 0, l = 0){
        return (2 * w) + (2 * l)
    },
    area: function(w = 0, l = 0){
        return w * l
    }
}

console.log(`Perimeter = ${myMath.perimeter(2, 4)}`)
console.log(`Area = ${myMath.area(2, 4)}`)

// Example 6: Object

const cat = {
    name: "Mickey",
    color: "Black with white spots",
    breed: "unknown",
    meow: function(){
        console.log("MEOW MEOW MEOW")
    }
}

cat.meow()

// Example 7: Object

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount++
        return `${this.name} lays an egg`
    },
    resetEggCount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }
}

console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.resetEggCount())

// Example 8: try-catch

try {
    function yell(message){
        console.log(message.toUpperCase().repeat(3))
    }
    yell("stop!")
}
catch(error){
    console.log(error)
    console.log("Please pass a string next time!")
}


// EXERCISE 1 - mycalculator object


const mycalculator = {
    message: "This is a simple calculator",
    side: 2,
    area_square: function(){
        return Math.pow(this.side, 2)
    },
    volume_cube: function(){
        return Math.pow(this.side, 3)
    }
}

console.log("\n--- EXERCISE 1: mycalculator ---")
console.log(mycalculator.message)
console.log(`Area of square = ${mycalculator.area_square()}`)
console.log(`Volume of cube = ${mycalculator.volume_cube()}`)


// EXERCISE 2 - readProperty function


function readProperty(obj, prop){
    try {
        return obj[prop]
    } catch(error){
        return "Error accessing property"
    }
}

console.log("\n--- EXERCISE 2: readProperty ---")
console.log(readProperty(mycalculator, "side"))  
console.log(readProperty(null, "side"))          
