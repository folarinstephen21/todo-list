import "./style.css";
import { addTask } from "./add.js";

const todos = [];
let todoDialog;
let todoList;
let closeDialog;
let userTask;


document.addEventListener("DOMContentLoaded", () => {
  todoDialog = document.getElementById("todoDialog");
  todoList = document.querySelector(".todo-display");
  userTask = document.getElementById("userTask");
  closeDialog = document.getElementById("closeDialog");

  todoList.className = "todo";

  const addAction = document.getElementById("tasks");

  addAction.addEventListener("click", () => {
    todoDialog.showModal();
  });

  userTask.addEventListener("submit", taskHandler);

  closeDialog.addEventListener("click", () => {
    todoDialog.close();
  });
});



function renderTodos() {  

  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const info = document.createElement("span");
    info.textContent =  todo.taskInfo

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "1rem";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    li.appendChild(info);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
  });
}

function taskHandler(event) {
  event.preventDefault();
  
  const form = event.target;

  const title = form.querySelector("#title").value;
  
  const description = form.querySelector("#desc").value;
 
  const date = form.querySelector("#date").value;
  
  const priority = form.querySelector("#priority").value;
  
  const task = new addTask(title, description, date, priority);
  todos.push(task);

  renderTodos();
  todoDialog.close();
}

function removeTodo(todoId) {
  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    todos.splice(index, 1);
    renderTodos();
  }
}