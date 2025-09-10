/*
Homework 1: control flow and loops
Student’s name: Clifford Odige
*/

console.log("\n------ Program 1: conditional statement ------");

let user_input = prompt("Enter a number");

// Check if user clicked "Cancel"
if (user_input === null) {
  console.log("Null and void! The user clicked the Cancel button.");
} else if (user_input.trim() === "") {
  console.log("Your answer was blank! The user didn’t type anything and clicked OK.");
} else {
  let number = parseFloat(user_input);

  if (isNaN(number)) {
    console.log(`${user_input} is not a valid number.`);
  } else {
    if (number > 0) {
      console.log("Think positively! The user entered a positive number.");
    } else if (number < 0) {
      console.log("Never have negative balance! The user entered a negative number.");
    } else if (number === 0) {
      console.log("Yin and Yang! The user entered zero.");
    }
  }
}

console.log("\n------ Program 2: for loop and nested conditional statement ------");

let numbers = [];

for (let i = 0; i < 10; i++) {
  let input = prompt(`Enter number ${i + 1} of 10`);

  if (input === null || input.trim() === "" || isNaN(parseFloat(input))) {
    console.log(`Invalid input at index ${i}. Defaulting to 0.`);
    numbers.push(0);
  } else {
    numbers.push(parseFloat(input));
  }
}

let count3 = 0;
let count5 = 0;
let count7 = 0;

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];

  if (num % 3 === 0) {
    count3++;
  }

  if (num % 5 === 0) {
    count5++;
  }

  if (num % 7 === 0) {
    count7++;
  }
}

console.log(`${count3} numbers are multiple of 3`);
console.log(`${count5} numbers are multiple of 5`);
console.log(`${count7} numbers are multiple of 7`);
