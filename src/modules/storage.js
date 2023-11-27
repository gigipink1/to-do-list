import { toDoList, makeToDo, projectStorage, addProject} from "./dom"

function storeToDos() {
    if (toDoList) {
    localStorage.setItem('toDos', JSON.stringify(toDoList));
    }
}

function storeProjects (){
     {
        localStorage.setItem('Projects', JSON.stringify(projectStorage));
    }
}

function getToDos() {
    if (localStorage.getItem) {
    const storage = JSON.parse(localStorage.getItem('toDos'));
    console.log(storage);
    for(let i = 0; i < storage.length; i++){
        toDoList.push(storage[i]);
        makeToDo(storage[i])
    }
    console.log(toDoList);
    }
}

function getProjects() {

    const projects = JSON.parse(localStorage.getItem('Projects'));

    console.log(projects);
    for (let i = 1; i < projects.length; i++) {
        if (projects[i] !== 'Default') {
        console.log(projects[i]);
        projectStorage.push(projects[i]);
        addProject(projects[i])
        }
    }

}

export {storeToDos, getToDos, storeProjects, getProjects};