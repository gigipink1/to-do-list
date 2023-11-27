
import {createToDo, editToDo} from './todo';
import pencil from '../assets/pencil-outline.svg'


//to do creation



const toDoList = [];
const projectStorage = ['Default']


function getInputData(e) {
    const todoItem = [];
    for(let i=0; i < 5; i++ ) {

        todoItem.push(e.target[i].value);

    }
    const newItem = createToDo(todoItem[0], todoItem[1], todoItem[2], todoItem[3], todoItem[4]);
    toDoList.push(newItem);
    const project = document.querySelector('.to-dos');
    //console.log(project);
    if (project.classList[1] === newItem.project.replace(/\s+/g, '-').toLowerCase()) {
        makeToDo(newItem);
    }
    //console.log(toDoList)

};

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
        //console.log(e.target.parentNode.parentNode.classList[1]);
        deleteToDo(e);
    });
    const editBtn = div.querySelector('.edit');
    editBtn.addEventListener('click', (e) => {
        //console.log(e.target.parentNode.firstChild.textContent);
        openEdit(e);
    });
}

//to-do manipulation

function deleteToDo(e) {
    const title = e.target.parentNode.children[0].textContent;
    const desc = e.target.parentNode.children[1].textContent;
    const project = e.target.parentNode.parentNode.classList[1]
    const todoIndex = toDoList.findIndex( (item) => {
        return title === item.title && desc === item.desc && project === item.project.replace(/\s+/g, '-').toLowerCase()
        });
    
    //console.log(todoIndex);
    toDoList.splice(todoIndex, 1);
    removeToDo(title);
}

function removeToDo(title){
    const toDos = document.querySelector('.to-dos');
    const toDoCards = toDos.querySelectorAll('.todo-card');
    for (const card of toDoCards) {
        if (title === card.firstChild.textContent) {
            toDos.removeChild(card);
        }
    }
}

function openEdit(e) { //dom

    const title = e.target.parentNode.children[0].textContent;
    const desc = e.target.parentNode.children[1].textContent;
    const dueDate = e.target.parentNode.children[2].textContent;
    const fixedDD = dueDate.replace('Due Date: ', '');
    const priority = e.target.parentNode.children[3].textContent;
    const project = e.target.parentNode.parentNode.classList[1]
    const todoIndex = toDoList.findIndex( (item) => {
        return title === item.title && desc === item.desc && project === item.project.replace(/\s+/g, '-').toLowerCase()
        });
    
   // console.log(todoIndex);
    const projectEdit = document.querySelector('#edit-todo');
    projectEdit.dataset.indexNumber = todoIndex;
    const titleInput = projectEdit.querySelector('#title-edit');
    const descInput = projectEdit.querySelector('#description-edit');
    const priorityInput = projectEdit.querySelector('#priority-edit');
    const priorityOptions = priorityInput.querySelectorAll('option');
    const dueDateInput = projectEdit.querySelector('#dueDate-edit');
    const projectInput = projectEdit.querySelector('#project-edit');
    const projectOptions = projectInput.querySelectorAll('option');
    //console.log(title);
    titleInput.value = title;
    descInput.value = desc;
    descInput.textContent = desc;
    priorityOptions.forEach((option) => {
        //console.log(option);
        if (`Priority: ${option.textContent}` === priority) {
            option.setAttribute('selected', 'true');
        }
    })
    dueDateInput.value = fixedDD;
    projectOptions.forEach((option) => {
        if (option.textContent === project) {
            option.setAttribute('selected', 'true');
        }
    })

    projectEdit.showModal();
    
}


//project functions

function newProjectInput(){ //dom
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


function getData(input) {
    const projectName = input.target[0].value;
    //console.log(projectName);
    projectStorage.push(projectName);
    addProject(projectName);
}

function addProject(name) { 

    const projectList = document.querySelector('.project-list');
    if (projectList.lastElementChild.classList.value === 'project-form') {
    projectList.removeChild(projectList.lastChild);
    };
    const li = document.createElement('li');
    li.textContent = name;
    projectList.appendChild(li);
    li.classList.value = name.replace(/\s+/g, '-').toLowerCase();
    projectList.lastChild.addEventListener('click', (e) =>{
        //console.log(e.target.textContent);
        openProjectList(e.target.textContent);
    });
    const options = document.createElement('option');
    const project = document.querySelector('#project');
    const projectEdit = document.querySelector('#project-edit');
    options.textContent = name;
    project.appendChild(options.cloneNode(1));
    projectEdit.appendChild(options.cloneNode(1));
}

function openProjectList(project) { 
    const projectList = document.querySelector('.project-list');
    const projectItems = projectList.querySelectorAll('li');
    const todoCards = document.querySelector('.to-dos');
    project = project.replace(/\s+/g, '-').toLowerCase();
    todoCards.classList.value = `to-dos ${project}`;
    
    projectItems.forEach((item) => {
        if (item.classList.value === project && item.classList.value !== 'project-btn') {
            item.style.color = 'white';
            item.style.fontSize = '20px'
            const button = document.createElement('button');
            if (item.classList.value !== 'default') {
            button.classList.add('project-delete');
            button.textContent = 'X';
            button.addEventListener('click', deleteProject)
            item.appendChild(button);
            }
        } else if (item.classList.value !== project && item.classList.value !== 'project-btn' && item.textContent !== 'Projects') {
            item.style.color = 'black';
            item.style.fontSize = '16px'; 
            if(item.lastChild === item.querySelector('button')) {
            const button = item.querySelector('button');
            item.removeChild(button);
            }
        }
    })
    while(todoCards.firstChild) {
        todoCards.removeChild(todoCards.lastChild);
    }
    for (const item of toDoList) {
        if (item.project.replace(/\s+/g, '-').toLowerCase() === project) {
            makeToDo(item);
        }
    }
}

function deleteProject(e) { 
    const project = e.target.parentNode.classList.value;
    const projectList = document.querySelector('.project-list');
    const projectItem = projectList.querySelector(`.${project}`);
    const options = document.querySelectorAll('option');
    const projectIndex = projectStorage.findIndex((item) => {
        project === item;
    })
    projectList.removeChild(projectItem);
    projectStorage.splice(projectIndex, 1);
    

    for (const item of toDoList) {
        if (item.project.replace(/\s+/g, '-').toLowerCase() === project) {
            const todoIndex = toDoList.indexOf(item);
            toDoList.splice(todoIndex,1);

        }
    }

    options.forEach((item) => {
        if (item.textContent === project) {
            const parent = item.parentNode;
            parent.removeChild(item);
            
        }
    })

}



export{openProjectList, getInputData, newProjectInput, toDoList, makeToDo, projectStorage, addProject};