import { getTodos, removeTodo } from "../state/todoState.js";
const projects = document.getElementById("projects")




export function renderTodos(todoListElement ) {
  // CLEAR first (this is critical)
  todoListElement.innerHTML = "";

  const todos = getTodos();

  todos.forEach(todo => {
    const li = document.createElement("li");

    const info = document.createElement("span");
    info.textContent = `${todo.title} (${todo.priority}) ${todo.date}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      removeTodo(todo.id);
      // safe re-render
      renderTodos(todoListElement);
      renderPanelTodos(projects);
      
    });

    li.append(info, removeBtn);
    todoListElement.appendChild(li);
  });
}


export function renderPanelTodos(dropElement) {
  dropElement.innerHTML = "";

  const todos = getTodos();

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.classList = "list-item"
    li.textContent = todo.title;
    dropElement.appendChild(li);
  });
}



