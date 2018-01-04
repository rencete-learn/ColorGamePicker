var colors = [];
var correctIndex = 0;

// Main program proper
generateRandomColors(6);

for(var i = 0; i < colors.length; i++) {
    document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
}

assignCorrectColor();

// *** FUNCTIONS ***

function generateRandomColors(num) {
    colors = new Array(num);
    for (var i = 0; i < colors.length; i++) {
        colors[i] = "";
    }
    colors = colors.map(() => {        
        var red = genRandomValue(255);
        var green = genRandomValue(255);
        var blue = genRandomValue(255);
        var color = "RGB(" + red + ", " + green + ", " + blue + ")";
        return color;
    });
}

function assignCorrectColor() {
    correctIndex = genRandomValue(5);
    document.getElementById("display").textContent = colors[correctIndex];
}

function genRandomValue(multiplier) {
    return Math.round((Math.random() * multiplier));
}

// **** To get the computed properties from CSS file ****
// var div1 = document.querySelector(".square");
// var style = window.getComputedStyle(div1, null);
// var bgColor = style.getPropertyValue("background-color");
// alert(bgColor);
