var colors = [];

var generateRandomColors = function(num) {
    colors = new Array(num);
    for (var i = 0; i < colors.length; i++) {
        colors[i] = "";
    }
    colors = colors.map(() => {
        var genColorValue = function() {
            return Math.round((Math.random() * 255))
        }
        var red = genColorValue();
        var green = genColorValue();
        var blue = genColorValue();
        var color = "RGB(" + red + ", " + green + ", " + blue + ")";
        return color;
    });
}

generateRandomColors(6);

for(var i = 0; i < colors.length; i++) {
    document.querySelectorAll(".square")[i].style.backgroundColor = colors[i];
}

// **** To get the computed properties from CSS file ****
// var div1 = document.querySelector(".square");
// var style = window.getComputedStyle(div1, null);
// var bgColor = style.getPropertyValue("background-color");
// alert(bgColor);
