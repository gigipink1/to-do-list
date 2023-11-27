import { toDoList, makeToDo } from "./dom"

function storeToDos() {
    if (toDoList) {
    localStorage.setItem('toDos', JSON.stringify(toDoList));
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

export {storeToDos, getToDos};