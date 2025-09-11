/*
Clifford Odige
Lab 4, functions
Sep 9, 2025
*/

console.log("Student's full name")

// ----- Example 1 -----
function msg() {
  console.log("----- Example 1 -----")
  console.log("Hello World!")
}

// ----- Example 2 -----
function printCount() {
  console.log("----- Example 2 -----")
  for (let n = 3; n > 0; n--) {
    console.log(n)
  }
}

// ----- Example 3 -----
function greeting(username) {
  console.log("----- Example 3 -----")
  console.log(`Welcome to JS ${username}`)
}

// ----- Example 4 -----
function upperMessage(message) {
  console.log("----- Example 4 -----")
  let changeUpper = message.toUpperCase()
  console.log(changeUpper)
}

// ----- Example 5 -----
function isSnakeEyes(dice1, dice2) {
  console.log("----- Example 5 -----")
  if (dice1 === 1 && dice2 === 1) {
    console.log("Snake Eyes!")
  } else {
    console.log("Not Snake Eyes!")
  }
}

// ----- Example 6 -----
function areaRectangle(length, width) {
  console.log("----- Example 6 -----")
  return length * width
}

// ----- Example 7 -----
function checkTemperature(temperature) {
  console.log("----- Example 7 -----")
  if (temperature >= 75) {
    return true
  } else {
    return false
  }
}

// ----- Exercise: checkName() -----
function checkName() {
  console.log("----- Exercise: checkName() -----")
  let name;

  while (true) {
    name = prompt("Please enter your name:");

    if (name === null) {
      alert("You forgot to enter a name. Enter a name again:");
    } else if (name.trim() === "") {
      alert("Your answer was blank! Enter a name again:");
    } else if (!isNaN(parseFloat(name))) {
      alert(`${name} is invalid! Enter a name again:`);
    } else {
      break; // valid name entered
    }
  }

  let uppercaseName = name.toUpperCase();
  console.log(`Welcome ${uppercaseName} to the class!`);
}
