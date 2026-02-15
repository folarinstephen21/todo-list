import "./style.css";

import { renderTodos, renderPanelTodos, renderProject } from "./ui/renderTodos.js";
import { taskHandler, filterHandlers } from "./handlers/taskHandler.js";
import { projectHandler } from "./handlers/projectHandler.js";
import { setupDialog } from "./ui/dialog.js";
import { setupProjectPanel, testPanel } from "./ui/projectPanel.js";
import { closeDialog } from "./ui/dialog.js";

document.addEventListener("DOMContentLoaded", () => {

  // Todo list (shared UI target)
  const todoDisplay = document.querySelector('.todo-display');
  const todayPanel = document.getElementById("todayPanel");
  const defaultTodos = document.getElementById("default")
  const addProjects = document.getElementById("addProjects")

  renderProject(addProjects)
  
  // Dialog + form
  const dialog = document.getElementById("todoDialog");
  const form = document.getElementById("userTask");
  const projectForm = document.getElementById("userProjectForm")
  const projectDialog = document.getElementById("projectDialog")

  // links
  const today = document.getElementById("today")
  const alpha = document.getElementById("alpha")

  today.addEventListener("click", filterHandlers(todayPanel))

    
  // Buttons
  const openDialogBtn = document.getElementById("tasks");
  
  const projectElement = document.getElementById("projects");
  
  const closeDialogBtn = document.getElementById("closeDialog");
  const homeBtn = document.getElementById("homeBtn")

  // Setup dialog open
  setupDialog(openDialogBtn, dialog);
  closeDialog(closeDialogBtn, dialog);
  setupDialog(alpha, projectDialog)

  
  // Setup form submit
  form.addEventListener(
    "submit",
    taskHandler(defaultTodos, dialog, projectElement, addProjects)
  );

  projectForm.addEventListener("submit", projectHandler(projectDialog, addProjects))



  // Initial render (loads from localStorage)
  renderTodos(defaultTodos);
  renderPanelTodos(projectElement);
});
