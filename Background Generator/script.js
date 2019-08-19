var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.getElementById("gradientcolortext");
var button = document.getElementById("gradientbutton");

function setGradientText() {
    h3.innerHTML = body.style.background;
}

function randomGradient() {
    var r = Math.floor(Math.random()*256);          // Random between 0-255
    var g = Math.floor(Math.random()*256);          // Random between 0-255
    var b = Math.floor(Math.random()*256);          // Random between 0-255
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")"; // Collect all to a string
    var rgb1 = "rgb(" + b + ", " + g + ", " + r + ")"; // Collect all to a string
    body.style.background = "linear-gradient(to right, " + rgb + ", " + rgb1 + ")";
    setGradientText();
}

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    setGradientText();  
    /* css.textContent = body.style.background + ";"; */
}

body.style.background = 
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

setGradientText();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);
