const hourDisplay = document.querySelector("#hours")
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const dayDisplay = document.querySelector("#day")
const localDisplay = document.querySelector("#local")
const loading = document.querySelector("#loading")

setTimeout(function () {
  loading.style.display = "none";
}, 3000);
setTimeout(function () {
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (month < 10) {
      month = "0" + month;
    }
    hourDisplay.textContent = hours + " :";
    minutesDisplay.textContent = minutes + " :";
    secondsDisplay.textContent = seconds;
    dayDisplay.textContent = day + " / " + month + " / " + year;
  }, 1000);
}, 2000);

/*RGB effect*/

var cont = 0;
  var colors = ["#d00", "#dd0", "#0d0", "#0dd", "#00d"];
    setInterval(function () {
      display.style.color = colors[cont];
      cont = (cont + 1) % colors.length;
    }, 500);

/*Dark Mode*/

var button = document.querySelector("#modeChanger");
var bg = document.querySelector(".container");
var watch = document.querySelector("#watch");
var display = document.querySelector("#display")
var leftButton = document.querySelector("#leftButton")
var rightButton = document.querySelector("#rightButton")

var clicked = true;
var white = "#d8d8d8";
var black = "#252525";

button.addEventListener("click", () => {
  if (clicked) {
    clicked = false;
    bg.style.backgroundColor = white;
    button.style.backgroundColor = white;
    button.style.color = black;
    button.style.borderColor = black;
    watch.style.borderColor = black;
    watch.style.backgroundColor = white;
    display.style.color = black;
    leftButton.style.backgroundColor = black;
    rightButton.style.backgroundColor = black;
    button.textContent = "Dark Mode";
  } else {
    clicked = true;

    bg.style.backgroundColor = black;
    button.style.backgroundColor = black;
    button.style.color = white;
    button.style.borderColor = white;
    watch.style.borderColor = white;
    watch.style.backgroundColor = black;
    display.style.color = white;
    leftButton.style.backgroundColor = white;
    rightButton.style.backgroundColor = white;
    
    button.textContent = "White Mode";
  }
});



