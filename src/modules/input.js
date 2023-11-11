import {createToDo} from './todo';
import { makeToDo } from './dom';

function openForm() {
    const todoBtn = document.querySelector('.todo-btn');
    const newToDo = document.querySelector('#new-todo');

    todoBtn.addEventListener('click', () => {
        newToDo.showModal()
    })
    
}

function cancelButton() {
    const newToDo = document.querySelector('#new-todo');
    const cancel = document.querySelector('#modal-cancel');
    cancel.addEventListener('click', ()=>{
        newToDo.close();
    })
}

function submitButton() {
    const form = document.querySelector('#new-todo');
    const realForm = form.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.close();
        getData(e);
        realForm.reset();

    });
}
const toDoList = [];


function getData(e) {
    const todoItem = [];
    for(let i=0; i < 5; i++ ) {

        todoItem.push(e.target[i].value);

    }
    const newItem = createToDo(todoItem[0], todoItem[1], todoItem[2], todoItem[3], todoItem[4]);
    toDoList.push(newItem);
    makeToDo(newItem);
    console.log(toDoList)

};



export {openForm, cancelButton, submitButton};