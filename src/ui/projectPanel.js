import { renderTodos, renderPanelTodos } from "./renderTodos.js";

export function setupProjectPanel(button, panel, todoList) {
  let isOpen = false;

  button.addEventListener("click", () => {
    isOpen = !isOpen;

    panel.classList.toggle("expanded", isOpen);
    button.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      renderTodos(todoList);
    }
  });
}

export function testPanel(button, panel){
let loaded = false
button.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!loaded) {
        renderPanelTodos(panel)
        loaded = true
    }

})
}


