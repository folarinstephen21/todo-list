import { getTodos, removeTodo, updateTodo } from "../state/todoState.js";
import {getProjects} from "../state/projectState.js"
import { compareAsc, format } from "date-fns";
const projects = document.getElementById("projects")


export function renderTodos(defaultElement ) {
  // CLEAR first (this is critical)
  defaultElement.innerHTML = "";

  const todos = getTodos();

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    console.log(todo.checked)
     if(todo.checked){
      li.classList= "completed default-list"
    }
    // li.classList = "default-list"

    const info = document.createElement("span");
    info.textContent = `${todo.title} (${todo.priority}) ${todo.date}`;

    li.appendChild(info);
    defaultElement.appendChild(li);
  });
};

export function renderProject(defaultElement){
  defaultElement.innerHTML = "";
  const projects = getProjects();

  projects.forEach(project => {
    const option = document.createElement("option")
    option.value = project.name;
    option.innerText = project.name;
    defaultElement.appendChild(option)
  })
}


export function renderPanelTodos(dropElement ) {
  dropElement.innerHTML = "";

  const todos = getTodos();

  todos.forEach(todo => {
   
    const li = document.createElement("li");
    
    li.classList = "list-item"
    li.textContent = `${todo.title}`;
    dropElement.appendChild(li);
  });
}


export function renderFilterTodos(todayPanel){

  todayPanel.innerHTML = "";
  const todos = getTodos();
  const filtered = todos.filter( filter );
   
  if (filtered.length === 0){
      const li = document.createElement("li");
      li.classList = "no-todo"
      li.textContent = "No todos for today"
      todayPanel.appendChild(li);
      todayPanel.classList.toggle("show")
    } else {
     filtered.forEach((item) => {
    const todaywrapper = document.createElement("div")
    todaywrapper.classList = "wrapper"
    const check = document.createElement("input");
    check.classList = "today-check";
    check.type = "checkbox";
    check.checked = item.checked;


    todaywrapper.appendChild(check)
    
    check.addEventListener("change", () => {
    checkHandler(item, check);
    todaylist.classList.toggle("completed", check.checked);
});


    const todaylist = document.createElement("li");
    todaylist.classList = "today-list";
    todaylist.textContent = item.title;
    todaywrapper.appendChild(todaylist);
    todayPanel.appendChild(todaywrapper);
    
  })
  todayPanel.classList.toggle("show")
  }
 
}

function filter(item){
  const today = format(new Date(), "yyyy-MM-dd");
  console.log(today)
  return item.date === today
}

function checkHandler(todo, checkbox) {
  updateTodo(todo.id, { checked: checkbox.checked });
}





