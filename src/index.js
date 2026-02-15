import "./style.css";

import { renderTodos, renderPanelTodos } from "./ui/renderTodos.js";
import { taskHandler, filterHandlers } from "./handlers/taskHandler.js";
import { setupDialog } from "./ui/dialog.js";
import { setupProjectPanel, testPanel } from "./ui/projectPanel.js";
import { closeDialog } from "./ui/dialog.js";

document.addEventListener("DOMContentLoaded", () => {
  // Todo list (shared UI target)
  const todoDisplay = document.querySelector('.todo-display');
  const todayPanel = document.getElementById("todayPanel");
  const defaultTodos = document.getElementById("default")
  
  // Dialog + form
  const dialog = document.getElementById("todoDialog");
  const form = document.getElementById("userTask");

  // links
  const today = document.getElementById("today")

  today.addEventListener("click", filterHandlers(todayPanel))

    
  // Buttons
  const openDialogBtn = document.getElementById("tasks");
  
  const taskElement = document.getElementById("tasks");
  
  const closeDialogBtn = document.getElementById("closeDialog");
  const homeBtn = document.getElementById("homeBtn")

  // Setup dialog open
  setupDialog(openDialogBtn, dialog);
  closeDialog(closeDialogBtn, dialog);

  
  // Setup form submit
  form.addEventListener(
    "submit",
    taskHandler(defaultTodos, dialog, taskElement)
  );



  // Initial render (loads from localStorage)
  renderTodos(defaultTodos);
  renderPanelTodos(taskElement);
});
