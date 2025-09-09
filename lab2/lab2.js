// lab2_script.js
console.log("Lab 2 by Clifford Odige");  // Student's full name
console.log("\n------ Example 1: array ------");

// create and initialize an array
let fruits = ["apple", "orange", "grapes", "kiwi", "pineapple"];
console.log(`The 3rd fruit = ${fruits[2]}`);
console.log(`There is/are ${fruits.length} fruit/s in the list`);

// remove the 1st element in array fruits using method shift()
console.log(`original array ${fruits}`);
fruits.shift();
console.log(`Remove the 1st element in array fruits = ${fruits}`);

// add elements to the start (left) of an array
fruits.unshift(25, "Mango", true);
console.log(`Updated array with three new elements = ${fruits}`);

// add elements to the end (right) of an array
fruits.push("PETER", 100);
console.log(`Updated array with two new elements to the right = ${fruits}`);

// find the index of an element
let index_blueberries = fruits.indexOf("blueberries");
console.log(`What is the index of 'blueberries'? ${index_blueberries}`);
// if the return index is -1, then the element doesn't exist in the array
let index_PETER = fruits.indexOf("PETER");
console.log(`What is the index of 'PETER'? ${index_PETER}`);

console.log("\n------ Example 2: if statement ------");
let day = true;
let night = false;

if (day) {
  console.log("Good morning");
}
console.log("END 1");

let n1 = 10;    // numerical data type
let n2 = "10";  // string data type

console.log("\n------ Example 3: if statement with logical operators ------");
if (n1 == n2) {
  console.log(`n1 is equal to n2 --> ${n1 == n2}`);
}
console.log("END 2");

if (n1 === n2) {
  console.log(`n1 is EXACTLY equal to n2 --> ${n1 === n2}`);
}
console.log("END 3");

console.log("\n------ Example 4: check if a number is even or odd ------");
let number = 7;
if (number % 2 === 0) {
  console.log(`${number} is EVEN`);
} else {
  console.log(`${number} is ODD`);
}

console.log("\n------ Example 5: check if an input is a string or a number ------");
let user_input = prompt("Enter a username");
let check_username = isNaN(parseFloat(user_input));
console.log(`${user_input} is not a number? ${check_username}`);
if (check_username) {
  console.log(`${user_input} is a STRING`);
} else {
  console.log(`${user_input} is a NUMBER`);
}

console.log("\n------ Example 6: multiway conditional statement ------");
let num1 = 9;
let num2 = 20;
if (num1 === num2) {
  console.log("num1 is EXACTLY EQUAL to num2");
} else if (num1 > num2) {
  console.log("num1 is GREATER THAN num2");
} else if (num1 < num2) {
  console.log("num1 is LESS THAN num2");
} else {
  console.log("ERROR: unable to compare");
}

console.log("\n------ Example 7: switch statement ------");
let gender = prompt("Enter a gender");
switch (gender) {
  case "Female":
  case "FEMALE":
  case "F":
  case "f":
  case "female":
    console.log("Selected gender = FEMALE");
    break;
  case "Male":
  case "MALE":
  case "M":
  case "m":
  case "male":
    console.log("Selected gender = MALE");
    break;
  case "Other":
  case "OTHER":
  case "o":
  case "O":
  case "other":
    console.log("Selected gender = OTHER");
    break;
  default:
    console.log("ERROR: unable to read the selected gender");
}

console.log("\n------ EXERCISE 1 ------");
user_input = prompt("Enter something");
check_username = isNaN(parseFloat(user_input));

if (check_username) {
  console.log(`${user_input} is a STRING`);
} else {
  const value = parseFloat(user_input);
  console.log(`${user_input} is a NUMBER`);

  if (value > 0) {
    console.log(`${value} is POSITIVE`);
  } else if (value < 0) {
    console.log(`${value} is NEGATIVE`);
  } else if (value === 0) {
    console.log(`${value} is ZERO`);
  } else {
    console.log("ERROR reading the number");
  }
}

console.log("\n------ EXERCISE 2 ------");
let colors = ["red", "green", "orange", "olive", "magenta"];
let user_color = prompt("Enter a color");
user_color = user_color ? user_color.toLowerCase() : "";
let colorIndex = colors.indexOf(user_color);

switch (colorIndex !== -1) {
  case true:
    console.log(`Good choice, ${user_color} exists in the list at index ${colorIndex}`);
    break;
  default:
    console.log(`Sorry, ${user_color} is not in the list. Available: ${colors.join(", ")}`);
    break;
}
