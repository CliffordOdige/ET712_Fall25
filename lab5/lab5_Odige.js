







let great = function(username){

}
// arrow function
let greeting = (username)=>{
    console.log(`Good afternoon ${username}`)
}
// EXAMPLE 2: default parameters
// randomly generated a number between 1 and 9
// function will pass the amount of time that the number will be generated
function rand_number(x=1){
    for(let n = 1; n<= x; n++){
        let num = Math.ceil(Math.random()*9)
        console.log(`${num}`)
    }
}

// EXAMPLE: 3 spread syntax ...
numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n---- Example 3: spread ----`)
console.log(`The maximum number is = ${max_number}`)

// create an object 'car'
const car ={
    // properties
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    car_description : function(){
        return `Car type = ${this.type}, ${this.model}, car color =${color}`
    }
}