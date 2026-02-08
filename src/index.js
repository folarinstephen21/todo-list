import "./style.css";

import { renderTodos, renderPanelTodos } from "./ui/renderTodos.js";
import { taskHandler } from "./handlers/taskHandler.js";
import { setupDialog } from "./ui/dialog.js";
import { setupProjectPanel, testPanel } from "./ui/projectPanel.js";
import { closeDialog } from "./ui/dialog.js";

document.addEventListener("DOMContentLoaded", () => {
  // Todo list (shared UI target)
  const todoDisplay = document.querySelector('.todo-display');
  const container = document.getElementById("cardContainer");
  const panelDisplay = document.querySelector(".panel-display")

  // Dialog + form
  const dialog = document.getElementById("todoDialog");
  const form = document.getElementById("userTask");

    
  // Buttons
  const openDialogBtn = document.getElementById("tasks");
  
  const projectElement = document.getElementById("projects");
  
  const closeDialogBtn = document.getElementById("closeDialog");
  const homeBtn = document.getElementById("homeBtn")

  // Setup dialog open
  setupDialog(openDialogBtn, dialog);
  closeDialog(closeDialogBtn, dialog);

  
  // Setup form submit
  form.addEventListener(
    "submit",
    taskHandler(todoDisplay, dialog, projectElement)
  );

  // Setup project dropdown panel
  // setupProjectPanel(
  //   projectToggleBtn,
  //   projectPanel,
  //   todoList
  // );



  // Initial render (loads from localStorage)
  renderTodos(todoDisplay);
  renderPanelTodos(projectElement);
});
