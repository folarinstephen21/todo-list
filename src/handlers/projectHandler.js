import Project from "../models/Project.js";
import {renderProject} from "../ui/renderTodos.js"
import {addProject} from "../state/projectState.js"


export function projectHandler(dialog, projectUi){
     return function (event) {
        event.preventDefault();
    
        const form = event.target;
        const project = new Project(
          form.name.value
        );
    
        addProject(project);
        renderProject(projectUi);
        dialog.close();
        form.reset();
      };
}

