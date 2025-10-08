/*
* Clifford Odige
* lab 8, events
* Oct 7, 2025
*/
console.log("Student's full name")
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
  if(e.target.textContent == "PRESS ME!"){
    e.target.textContent = "Key was pressed"
  }
  else{
    e.target.textContent = "PRESS ME!"
  }

  // toggle between class in css
  e.target.classList.toggle("btnactive")
})
