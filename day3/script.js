const hourDisplay = document.querySelector("#hours")
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const dayDisplay = document.querySelector("#day")
const localDisplay = document.querySelector("#local")
const loading = document.querySelector("#loading")

setTimeout(function () {
  loading.style.display = "none";
}, 1000);

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

/*RGB effect*/

const display = document.querySelector("#display")

var colors = ["#fff", "#fafafa", "#eaeaea"];

var cont = 0;

setInterval(function () {
  display.style.color = colors[cont];
  cont = (cont + 1) % colors.length;
}, 500);

