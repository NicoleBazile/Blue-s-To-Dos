const toDoList = document.querySelector('ul');
let form = document.querySelector('#addToDo');
form.addEventListener('submit',addItem);
let clearAll= document.querySelector('#clearAll');
clearAll.addEventListener('click', clearToDoList);
toDoList.addEventListener('click', toggleCompleted)
//Tell document to find the element with the id associated with the button in html and assign that value to the variable clearCompleteButton
let clearCompleteButton = document.querySelector('#clearComplete');
//Tell the clearCompleteButton to listen for a click and to run the clearComplete function
clearCompleteButton.addEventListener('click', clearComplete);

const toDoCounter = document.getElementById('toDo')

function addItem(e) {
  e.preventDefault()
  document.querySelector('input').value;
  let li = document.createElement('li');
  let addLi = document.createTextNode(document.querySelector('input').value);
  li.appendChild(addLi);
  toDoList.appendChild(li);
  toDoCounter.innerText = toDoList.getElementsByTagName("li").length;
}

function clearToDoList() {
  while (toDoList.firstChild){
    toDoList.removeChild(toDoList.firstChild);
    toDoCounter.innerText = toDoList.getElementsByTagName("li").length;
  }
}

function toggleCompleted(e) {
  if (e.target.nodeName !== "LI") return;
  e.target.classList.toggle('crossOut');
}
function clearComplete() {
  const crossedOutItems = document.getElementsByClassName('crossOut')
  while (crossedOutItems.length){
    toDoList.removeChild(crossedOutItems[0]);
    toDoCounter.innerText = toDoList.getElementsByTagName("li").length;
  }
}
