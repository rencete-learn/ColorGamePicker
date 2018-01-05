var colors = [];
var correctIndex = 0;

// Main program proper
generateRandomColors(6);
assignCorrectColor(6);

for(let i = 0; i < colors.length; i++) {
    document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
    document.querySelectorAll(".square")[i].addEventListener("click", function() {
        if(i === correctIndex) {
            // Set other divs to have the same color
            var applyColor = this.style.backgroundColor;
            var divs = document.querySelectorAll(".square");
            for (var index = 0; index < divs.length; index++) {
                divs[index].style.backgroundColor = applyColor;
            }
        }
        else {
            this.style.backgroundColor = "#232323";
        }
    })
}


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

function assignCorrectColor(numDivs) {
    correctIndex = genRandomValue(numDivs-1);
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

// **** Fade out effect ****
var fadeTarget = this;
var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity < 0.1) {
        clearInterval(fadeEffect);
    } else {
        fadeTarget.style.opacity -= 0.1;
    }
}, 25);