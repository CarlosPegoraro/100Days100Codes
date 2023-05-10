var button = document.querySelector(".sunMoon");
var sun = document.querySelector("#sun");
var moon = document.querySelector("#moon");
var bg = document.querySelector(".container-light-dark");
var text = document.querySelector("#description");

var isSunClicked = true;

button.addEventListener("click", () => {
  if (isSunClicked) {
    isSunClicked = false;
    sun.style.display = "none";
    moon.style.display = "block";
    bg.style.backgroundColor = "#090270";
    bg.style.backgroundImage = "url('backgroundDark.png')";
    text.textContent = "Clique no sol";
  } else {
    isSunClicked = true;
    sun.style.display = "block";
    moon.style.display = "none";
    bg.style.backgroundColor = "#2fa3f0";
    bg.style.backgroundImage = "url('background.png')";
    text.textContent = "Clique na lua";
  }
});