
import {createToDo} from './todo';


function newProjectInput(){
    const projectList = document.querySelector('.project-list');
    const form = document.createElement('form');
    form.classList.add('project-form')
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('newProject');
    form.appendChild(input);
    projectList.appendChild(form);
    input.focus();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getData(e);
    })
}



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
        getInputData(e);
        realForm.reset();

    });
}

function defaultButton () {
    const sidebar = document.querySelector('.sidebar');
    const defaultBtn = sidebar.querySelector('.default');
    defaultBtn.addEventListener('click', (e) => {
        openProjectList(e);
    })

}
const toDoList = [];


function getInputData(e) {
    const todoItem = [];
    for(let i=0; i < 5; i++ ) {

        todoItem.push(e.target[i].value);

    }
    const newItem = createToDo(todoItem[0], todoItem[1], todoItem[2], todoItem[3], todoItem[4]);
    toDoList.push(newItem);
    const project = document.querySelector('.to-dos');
    console.log(project);
    if (project.classList[1] === newItem.project.replace(/\s+/g, '-').toLowerCase()) {
        console.log(newItem);
        makeToDo(newItem);
    }
    console.log(toDoList)

};




function openProject() {
    const projectBtn = document.querySelector('.project-btn');
    projectBtn.addEventListener('click', newProjectInput);
    }

function getData(input) {
        
        const projectName = input.target[0].value;
        console.log(projectName);
        addProject(projectName);
}

function addProject(name) {
        const projectList = document.querySelector('.project-list');
        projectList.removeChild(projectList.lastChild);
        const li = document.createElement('li');
        li.textContent = name;
        projectList.appendChild(li);
        projectList.lastChild.addEventListener('click', (e) =>{
            openProjectList(e)
        })
        const options = document.createElement('option');
        const project = document.querySelector('#project');
        options.textContent = name;
        project.appendChild(options);
}

function openProjectList(e) {
    const todoCards = document.querySelector('.to-dos');
    let project = e.target.textContent;
    project = project.replace(/\s+/g, '-').toLowerCase();
    todoCards.classList.value = `to-dos ${project}`;
    while(todoCards.firstChild) {
        todoCards.removeChild(todoCards.lastChild);
    }
    for (const item of toDoList) {
        if (item.project === e.target.textContent) {
            makeToDo(item);
        }
    }
}


function makeToDo(object) {
        const main = document.querySelector('.to-dos');
        const div = document.createElement('div');
        const header = document.createElement('h3');
        const para = document.createElement('p');
        const btn = document.createElement('button');
    
        div.classList.add('todo-card');
        header.textContent = object.title;
        div.appendChild(header);
        para.textContent = object.desc;
        div.appendChild(para.cloneNode(1));
        para.textContent = 'Due Date: ' + object.dueDate;
        div.appendChild(para.cloneNode(1));
        para.textContent = 'Priority: ' + object.priority;
        div.appendChild(para.cloneNode(1));
        btn.classList.add('edit');
        btn.textContent = 'Edit';
        div.appendChild(btn.cloneNode(1));
        btn.classList.remove('edit');
        btn.classList.add('delete');
        btn.textContent = 'Delete';
        div.appendChild(btn.cloneNode(1));
        main.appendChild(div);


        const deleteBtn = div.querySelector('.delete');
        deleteBtn.addEventListener('click', (e) => {
            console.log(e.target.parentNode.firstChild.textContent);
        });
        const editBtn = div.querySelector('.edit');
        editBtn.addEventListener('click', (e) => {
            console.log(e.target.parentNode.firstChild.textContent);
        });
}

export{openProject, makeToDo, openForm, cancelButton, submitButton, defaultButton};