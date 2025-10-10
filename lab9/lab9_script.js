let displaypexels = document.querySelector(".displayexels")
// read the pixels from the y axis
window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

// to the top
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    if (y_pixels > 600){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display = "none"
    }
})

// resize event: change background color if the window is resized
window.addEventListener("resize", function(){
    displaypexels.style.backgroundColor = "crimson"
})

//load event: when the page finishes loading, open an alert dialog
window.addEventListener("load", function(){
    this.alert("Page fully loaded!")
})