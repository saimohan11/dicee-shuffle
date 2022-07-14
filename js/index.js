var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomImagesource1 = "images/" + "dice" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource1);

var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomImagesource2 = "images/" + "dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);

if (randomnumber1 > randomnumber2) {
    document.querySelector(".header").innerHTML = "🚩 Player 1 Win"
}

else if (randomnumber2 > randomnumber1) {
    document.querySelector(".header").innerHTML = "Player 2 win 🚩"
} else {
    document.querySelector(".header").innerHTML = "🏴‍☠️ Draw"
}