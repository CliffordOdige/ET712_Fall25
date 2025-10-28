/* Exercise 1, Form Validation  */
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // clear messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let valid = true;
  
    // name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }
  
    // email with regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      valid = false;
    }
  
    // password length >= 5 and contains # or $ or %
    const specialCharPattern = /[#\$%]/;
    if (password.length < 5) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 5 characters.";
      valid = false;
    } else if (!specialCharPattern.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must contain one of #, $, or %.";
      valid = false;
    }
  
    if (valid) {
      document.getElementById("successMessage").textContent =
        "Form submitted successfully!";
    }
  });
  
  /*  Exercise 2, Card Gallery with Looping */
  const track = document.getElementById("track");
  const viewport = document.getElementById("viewport");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  
  const visible = 3;                                 // show 3 at a time
  const totalCards = track.children.length;          // 6 total
  const pages = Math.ceil(totalCards / visible);     // 2 pages
  let page = 0;                                      // 0 or 1
  
  function updateTrack() {
    // move by full viewport width so exactly 3 cards slide in
    const pageWidth = viewport.clientWidth;
    track.style.transform = `translateX(-${page * pageWidth}px)`;
  }
  
  rightBtn.addEventListener("click", () => {
    page = (page + 1) % pages;   // loop forward
    updateTrack();
  });
  
  leftBtn.addEventListener("click", () => {
    page = (page - 1 + pages) % pages;   // loop backward
    updateTrack();
  });
  
  // keep alignment correct on resize
  window.addEventListener("resize", updateTrack);
  