"use strict"

showClock();
setInterval ("showClock()", 2000);


function showClock() {
   var thisDay = new Date();

   var localDate = thisDay.toLocaleDateString();

   var localTime = thisDay.toLocaleTimeString();

   document.getElementById('currentTime').innerHTML = 
   '<span>' + localDate + '</span>' +
   '<span>' + localTime + '</span>';
}

window.onload = init;

function init() {

   const stars = document.querySelectorAll("span#stars img");

   for (let star of stars) {
      star.style.cursor = "pointer";
      star.addEventListener("mouseenter", lightStars);
   }

   const commentBox = document.getElementById("comment");
   commentBox.addEventListener("keyup", updateCount);
}

window.onload = init;

function init() {

   const stars = document.querySelectorAll("span#stars img");

   for (let star of stars) {
      star.style.cursor = "pointer";
      star.addEventListener("mouseenter", lightStars);
   }

   const commentBox = document.getElementById("comment");
   commentBox.addHandler("keyup", updateCount);
}
