console.log("Lab 10 by Clifford Odige");

// ----------- CLASS EXAMPLE -----------
let myform = document.querySelector("#form1");
let greeting = document.querySelector(".greeting");
let displayusername = document.querySelector(".display_username");

myform.addEventListener("submit", function(event){
  event.preventDefault();
  let usernameInput = document.querySelector("#username");
  let usernamevalue = usernameInput.value;
  if(usernamevalue.trim() === ""){
    alert("Please enter a username");
    return;
  }
  greeting.style.display = "block";
  displayusername.textContent = usernamevalue;
  usernameInput.value = "";
  myform.submit();
});

let btnsubmit = document.querySelector(".btnsubmit");
window.addEventListener("load", function(){
  btnsubmit.disabled = true;
});

let username_error_msg = document.querySelector(".username_error_msg");
let usernameInput = document.querySelector("#username");
usernameInput.addEventListener("input", function(){
  let usernamevalue = usernameInput.value;
  let len = usernamevalue.length;
  if(len >= 5 && len < 20){
    username_error_msg.textContent = "";
    btnsubmit.disabled = false;
    usernameInput.classList.add("active_input_valid");
  } else if(len === 20){
    username_error_msg.textContent = "Username can't be 20+ characters";
  } else {
    username_error_msg.textContent = "Username must be between 5 and 20 characters";
    btnsubmit.disabled = true;
    usernameInput.classList.remove("active_input_valid");
    usernameInput.classList.add("active_input_invalid");
  }
});

const inputpassword = document.querySelector("#password");
inputpassword.addEventListener("focus", function(){
  inputpassword.classList.add("active_input_valid");
});
inputpassword.addEventListener("blur", function(){
  inputpassword.classList.remove("active_input_valid");
  inputpassword.classList.add("active_input_invalid");
});

// ----------- LAB EXERCISE -----------
const takenUsernames = ['admin','user123','testuser','guest','peterpan'];
const registerForm = document.querySelector('#registerForm');
const usercheck = document.querySelector('#usercheck');
const availability = document.querySelector('#availability');
const submitBtn = registerForm.querySelector('.btnsubmit');

submitBtn.disabled = true;

usercheck.addEventListener('input', function(){
  const value = usercheck.value.trim().toLowerCase();
  if(value === ""){
    availability.textContent = "";
    usercheck.classList.remove('active_input_valid','active_input_invalid');
    submitBtn.disabled = true;
    return;
  }
  if(takenUsernames.includes(value)){
    availability.textContent = "❌ Username is taken";
    availability.classList.remove('username_ok');
    availability.classList.add('username_error_msg');
    usercheck.classList.remove('active_input_valid');
    usercheck.classList.add('active_input_invalid');
    submitBtn.disabled = true;
  } else {
    availability.textContent = "✅ Username available";
    availability.classList.remove('username_error_msg');
    availability.classList.add('username_ok');
    usercheck.classList.remove('active_input_invalid');
    usercheck.classList.add('active_input_valid');
    submitBtn.disabled = false;
  }
});

registerForm.addEventListener('submit', function(e){
  if(submitBtn.disabled){
    e.preventDefault();
  }
});
