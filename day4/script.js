const hourDefine = document.querySelector("#hoursDefine");
const minutesDefine = document.querySelector("#minutesDefine");
const secondsDefine = document.querySelector("#secondsDefine");
const hourDisplay = document.querySelector("#hours");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const endMessage = document.querySelector("#endMessage");
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const audio = document.querySelector("#audio");

startButton.addEventListener("click", start)
stopButton.addEventListener("click", stop);

function start() {
  let hours = parseInt(hourDefine.value);
  let minutes = parseInt(minutesDefine.value);
  let seconds = parseInt(secondsDefine.value);

  let interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval);
          endMessage.style.display = "block";
          playSound();
        }
      }
    }

    hourDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;

    // Verifique se é necessário adicionar o zero à esquerda
    if (hours < 10) {
      hourDisplay.textContent = "0" + hours;
    }
    if (minutes < 10) {
      minutesDisplay.textContent = "0" + minutes;
    }
    if (seconds < 10) {
      secondsDisplay.textContent = "0" + seconds;
    }
  }, 1000); // 1000 ms = 1 segundo
}

function stop() {
  location.reload()
}

function playSound() {
  audio.play();
}

var cont = 0;
  var colors = ["#0d0", "#0e0", "#0f0"];
  var size = ["1.2rem", "1.4rem", "1.6rem"]
    setInterval(function () {
      endMessage.style.color = colors[cont];
      endMessage.style.fontSize = size[cont];
      cont = (cont + 1) % colors.length;
    }, 500);