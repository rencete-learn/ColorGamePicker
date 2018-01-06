const hardMode = 6;
const easyMode = 3;

var colors = [];
var pickedIndex = 0;
var gameMode = hardMode;
var gameFinished = false;

// Selectors
var h1 = document.getElementsByTagName("h1")[0];
var statusLine = document.getElementById("status");
var rstBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


// Main program proper
init();

// *** FUNCTIONS ***
function init() {
    reset();
    addSquareListeners();
    addButtonListeners();
}

function generateRandomColors(num) {
    colors = [];
    for (var i = 0; i < num; i++) {
        var red = genRandomValue(255);
        var green = genRandomValue(255);
        var blue = genRandomValue(255);
        colors.push("RGB(" + red + ", " + green + ", " + blue + ")");
    }
}

function pickCorrectColor(numDivs) {
    pickedIndex = genRandomValue(numDivs-1);
    document.getElementById("display").textContent = colors[pickedIndex];
}

function addSquareListeners() {
    var squares = document.querySelectorAll(".square");
    for(let i = 0; i < hardMode; i++) {
        squares[i].addEventListener("click", function() {
            if (gameFinished) {
                // Do nothing
            }else if(i === pickedIndex) {
                successEventListener(this);
            }
            else {
                failEventListener(this);
            }
        })
    }
}

function successEventListener(that) {
    statusLine.textContent = "Success!";
    rstBtn.textContent = "Play Again?";
    // Set other divs to have the same color
    var applyColor = that.style.backgroundColor;
    var divs = document.querySelectorAll(".square");
    for (var index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor = applyColor;
    }
    h1.style.backgroundColor = applyColor;
    gameFinished = true;
}

function failEventListener(that) {
    that.style.backgroundColor = "#232323";
    statusLine.textContent = "Try Again";
}

function styleColorSquares() {
    var squares = document.querySelectorAll(".square");
    for(var i = 0; i < hardMode; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "";
        }
        else {
            squares[i].style.display = "none";
        }
    }
}

function addButtonListeners() {
    rstBtn.addEventListener("click", function() {
        reset();
    })
    document.getElementById("easyBtn").addEventListener("click", function() {
        this.classList.add("selected");
        hardBtn.classList.remove("selected");
        gameMode = easyMode;
        reset();
    })
    document.getElementById("hardBtn").addEventListener("click", function() {
        this.classList.add("selected");
        easyBtn.classList.remove("selected");
        gameMode = hardMode;
        reset();
    })
}

function reset() {
    generateRandomColors(gameMode);
    pickCorrectColor(gameMode);
    styleColorSquares();
    statusLine.textContent = "";
    gameFinished = false;
    rstBtn.textContent = "New Colors";
    h1.style.backgroundColor = "";
}

// Generates a random value between 0 and the number passed in
function genRandomValue(maxNum) {
    return Math.floor(Math.random() * (maxNum+1));
}

// **** To get the computed properties from CSS file ****
// var div1 = document.querySelector(".square");
// var style = window.getComputedStyle(div1, null);
// var bgColor = style.getPropertyValue("background-color");
// alert(bgColor);

// **** Fade out effect ****
// var fadeTarget = this;
// var fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//         fadeTarget.style.opacity = 1;
//     }
//     if (fadeTarget.style.opacity < 0.1) {
//         clearInterval(fadeEffect);
//     } else {
//         fadeTarget.style.opacity -= 0.1;
//     }
// }, 25);