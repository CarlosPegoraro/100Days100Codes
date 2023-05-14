const newTaskBtn = document.querySelectorAll(".newTaskBtn");
const listBody = document.querySelector("#listBody");

newTaskBtn.forEach(btn => btn.addEventListener("click", createNewItem));

function createNewItem() {
  var newLi = document.createElement("div");
  newLi.classList.add("listItem");

  var newRow = document.createElement("div");
  newRow.classList.add("row");

  var newCheck = document.createElement("input");
  newCheck.type = "checkbox";

  var newLabel = document.createElement("label");

  var newText = document.createElement("input");
  newText.type = "text";
  newText.placeholder = "Write New Task";
  
  var newBtn = document.createElement("button");
  newBtn.classList.add("newTaskBtn");
  
  var plusIcon = document.createTextNode("+");
  newBtn.appendChild(plusIcon);
  
  newBtn.addEventListener("click", createNewItem);
  
  newLabel.appendChild(newText);
  newRow.appendChild(newCheck);
  newRow.appendChild(newLabel);
  newRow.appendChild(newBtn);
  newLi.appendChild(newRow);
  listBody.appendChild(newLi);
}
