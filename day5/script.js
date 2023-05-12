const calcBtn = document.querySelector("#calc");
const resultDisplay = document.querySelector("#result");
const a1d = document.querySelector("#a1");
const a2d = document.querySelector("#a2");
const a3d = document.querySelector("#a3");
const b1d = document.querySelector("#b1");
const b2d = document.querySelector("#b2");
const b3d = document.querySelector("#b3");
const c1d = document.querySelector("#c1");
const c2d = document.querySelector("#c2");
const c3d = document.querySelector("#c3");

calcBtn.addEventListener("click", calc);

function calc() {
  let a1 = Number(a1d.value);
  let b1 = Number(b1d.value);
  let c1 = Number(c1d.value);
  let a2 = Number(a2d.value);
  let b2 = Number(b2d.value);
  let c2 = Number(c2d.value);
  let a3 = Number(a3d.value);
  let b3 = Number(b3d.value);
  let c3 = Number(c3d.value);

  let block1 = (a1 * b2 * c3)
  let block2 = (a2 * b3 * c1)
  let block3 = (a3 * b1 * c2)

  console.log(block1, block2, block3)

  let firstLine = block1 + block2 + block3;
  console.log(firstLine);

  let block4 = (a3 * b2 * c1 * -1);
  let block5 = (a1 * b3 * c2 * -1);
  let block6 = (a2 * b1 * c3 * -1);

  console.log(block4, block5, block6)

  let secondLine = (a3 * b2 * c1) + (a1 * b3 * c2) + (a2 * b1 * c3);
  console.log(secondLine);

  result = firstLine - secondLine;
  resultDisplay.textContent = result;
}