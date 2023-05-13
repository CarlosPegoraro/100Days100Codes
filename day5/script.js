const newTaskBtn = document.querySelectorAll(".newTaskBtn")
const listBody = document.querySelectorAll("#listBody")

newTaskBtn.addEventListener("click", createNewItem)

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
  
  var newBtn = document.createElement("input");
  newBtn.classList.add("newTaskBtn");

  var label = newLabel.appendChild(newText);
  var row = newRow.appendChild(newCheck).appendChild(label).appendChild(newBtn);
  var li = newLi.appendChild(row);

  listBody.appendChild(li);
}