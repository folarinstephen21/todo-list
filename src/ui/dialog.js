export function setupDialog(button, dialog) {
  button.addEventListener("click", () => dialog.showModal());
}

export function closeDialog(button, dialog){
    button.addEventListener("click", () => dialog.close());
}
