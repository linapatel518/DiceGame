/** @format */

// document.onload();
// var randomnumber11 = 3;
// var randomnumber11 = Math.random() * 6;
var randonnumber11 = Math.floor(Math.random() * 6) + 1;

var randomdicefrom_1to6 = "dice" + randonnumber11 + ".png";

var randomimagesrc = "images/" + randomdicefrom_1to6;

// document.onload( // no-need of onload-fn bcoz refreseh krne pe essehi hi puri website ki files vapis se opne hoti hai, thus toh mtlb sbhi functions vapis se run hotehh hai.
document.querySelectorAll("img")[0].setAttribute("src", randomimagesrc);
// );

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "dice" + randomnumber2 + ".png";
var randomimagesrc2 = "images/" + randomimage2;

document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

// now declaring the results:-

if (randomnumber2 == randonnumber11) {
  document.querySelector("h1").textContent = " 🚀 Match Draws";
} else if (randomnumber2 > randonnumber11) {
  document.querySelector("h1").textContent = " 👨 Player2 wins";
} else {
  document.querySelector("h1").textContent = " 👨‍🌾 Player1 wins";
}
