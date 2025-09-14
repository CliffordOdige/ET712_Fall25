/*
Student's full name: Clifford Odige
Homework 2 - functions, loops, and conditional statement
*/

// Exercise 1: name_counting() function
function name_counting(names) {
    let count = 0;
    
    // Loop through each name in the array
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < 5) {
            count++;
        }
    }

    return count;
}

// Example usage:
let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
let result = name_counting(names);
console.log("Number of names with less than 5 characters:", result);


// Exercise 2: checkNum() function
function checkNum() {
    let input;
    let num;

    // Keep asking until a valid number is entered
    while (true) {
        input = prompt("Enter a number:");
        num = parseInt(input);

        if (!isNaN(num)) {
            break; /
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }

    if (num % 2 === 0) {
        return true; 
    } else {
        return false; 
    }
}


