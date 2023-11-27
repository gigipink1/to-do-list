import {getInputData, openProjectList, newProjectInput, toDoList} from './dom'
import {editToDo} from './todo'

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
    const realForm = newToDo.querySelector('form');
    cancel.addEventListener('click', ()=>{
        newToDo.close();
        realForm.reset();
    
    })
}

function submitButton() {
    const form = document.querySelector('#new-todo');
    const realForm = form.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.close();
        getInputData(e);
        realForm.reset();

    });
}

function defaultButton () {
    const sidebar = document.querySelector('.sidebar');
    const defaultBtn = sidebar.querySelector('.default');
    defaultBtn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        openProjectList(e.target.textContent);
    })

}

function editButtons(){

    const editModal = document.querySelector('#edit-todo');
    const editForm = editModal.querySelector('form');
    const deleteBtn = editModal.querySelector('#modal-cancel-edit');

    deleteBtn.addEventListener('click', () => {
        editModal.close();
    })

    editForm.addEventListener('submit', (e) => {
        const todoIndex = parseInt(editModal.dataset.indexNumber);
        e.preventDefault();
        console.log(e);
        editModal.close();
        editToDo(toDoList[todoIndex], e);
        openProjectList(e.target[4].value);
    })
}

function openProject() {
    const projectBtn = document.querySelector('.project-btn');
    projectBtn.addEventListener('click', newProjectInput);
    }

export {editButtons, defaultButton, submitButton, cancelButton, openForm, openProject}