//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
 
//Fucntions
function addTodo(event){
    event.preventDefault();
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item"); 
todoDiv.appendChild(newTodo);
//Complete Button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//Delete Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append to List
todoList.appendChild(todoDiv);

todoInput.value="";
}

function deleteCheck(e){
   const item = e.target;
  //delete todo
   if(item.classList[0] === "trash-btn"){
       const todo = item.parentElement;
       todo.remove();
   }
//mark as complete
 if(item.classList[0] === "complete-btn"){
     const todo = item.parentElement;
     todo.classList.toggle("completed");
 }
}

