const STORAGE_KEY = "projects";


let projects = loadProjects();





function loadProjects() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function  saveProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  
}

export function getProjects() {
  return [...projects];
}

export function addProject(project) {
  projects.push(project);
  saveProjects();
}

export function removeProject(id) {
  todos = projects.filter(project => project.id !== id);
   saveProjects();
}

export function updateProject(id, updates) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  Object.assign(project, updates);
   saveProjects();
}
