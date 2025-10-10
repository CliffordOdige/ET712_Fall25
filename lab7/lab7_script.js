/**
 * Clifford Odige
 * Lab 7 - Intro to DOM
 */

console.log("Clifford Odige")

// access(select) element by id name
let titlenode = document.querySelector("#title")
console.log(titlenode)

// access(select) element by class name
let desc = document.querySelector(".description")
console.log(desc)

// access(select) element by tag name
let heading1 = document.querySelector("h1")
console.log(heading1)

// access(select) all elements by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("Loop through each element in the node list")

for (let index = 0; index < description_all.length; index++) {
    console.log(`${description_all[index].textContent}`)
}

// collect(select) the elements
let shape = document.querySelector(".shapeDivision")
let btn_square = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add an event to each button
btn_square.addEventListener("click", function() {
    shape.className = "square"
    shape.textContent = "SQUARE"
    shape.style.backgroundColor = "gold"
    shape.style.fontSize = "3rem"
})

btn_circle.addEventListener("click", function() {
    shape.className = "circle"
    shape.textContent = "CIRCLE"
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "hotpink"
})

btn_rectangle.addEventListener("click", function() {
    shape.className = "rectangle"
    shape.textContent = "RECTANGLE"
    shape.style.backgroundColor = "gray"
    shape.style.fontSize = "2rem"
})

// SEP 30
// event handler
let btnpress = document.querySelector(".btnpress")
btnpress.onclick = function() { alert(`${new Date()}`) }

// mouse events
let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragraph")
x.onmouseover = function() { circle_paragraph.textContent += "- CIRCLE -" }

// EVENT LISTENER
// collect the element
let box_color = document.querySelector(".box_color")

// function to randomly pick a color as an rgb value
const randomRGB = function() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

box_color.addEventListener("mouseout", function() {
    box_color.style.backgroundColor = randomRGB()
})

// key event
// collect the element
let inputtext = document.querySelector(".inputtext")
let username_paragraph = document.querySelector(".username_paragraph")

inputtext.addEventListener("keydown", function() {
    username_paragraph.textContent = "Username MUST have 3+ characters"
})


// ---------------------
// LAB EXERCISE
// ---------------------
// note: use querySelector() or querySelectorAll()

// 1. collect elements: search for the first p with class ps1
let ps1 = document.querySelector(".ps1")

// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.addEventListener("mouseout", function() {
    ps1.textContent = "CLIFFORD ODIGE"
})

// 2. search for the second p with class ps2
let ps2 = document.querySelector(".ps2")

// add a click event to the ps2 to change the font-size to 25px and color to olive when clicked
ps2.addEventListener("click", function() {
    ps2.style.fontSize = "25px"
    ps2.style.color = "olive"
})

// 3. search for the first div with class divs2
let divs2 = document.querySelector(".divs2")

// add a click event to change the background color to indigo
divs2.addEventListener("click", function() {
    divs2.style.backgroundColor = "indigo"
})

// 4. search for the second div with class divs3
let divs3 = document.querySelector(".divs3")

// add a keydown event to change the width of divs3 to 300px
document.addEventListener("keydown", function() {
    divs3.style.width = "300px"
})
