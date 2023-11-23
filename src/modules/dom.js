
import {createToDo} from './todo';


//button functions
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


//to do creation

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
        console.log(e.target.parentNode.parentNode.classList[1]);
        deleteToDo(e);
    });
    const editBtn = div.querySelector('.edit');
    editBtn.addEventListener('click', (e) => {
        console.log(e.target.parentNode.firstChild.textContent);
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
    
    console.log(todoIndex);
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

function openEdit(e) {

    const title = e.target.parentNode.children[0].textContent;
    const desc = e.target.parentNode.children[1].textContent;
    const dueDate = e.target.parentNode.children[2].textContent;
    const fixedDD = dueDate.replace('Due Date: ', '');
    const priority = e.target.parentNode.children[3].textContent;
    const project = e.target.parentNode.parentNode.classList[1]
    const todoIndex = toDoList.findIndex( (item) => {
        return title === item.title && desc === item.desc && project === item.project.replace(/\s+/g, '-').toLowerCase()
        });
    
    console.log(todoIndex);
    const projectEdit = document.querySelector('#edit-todo');
    projectEdit.dataset.indexNumber = todoIndex;
    const titleInput = projectEdit.querySelector('#title-edit');
    const descInput = projectEdit.querySelector('#description-edit');
    const priorityInput = projectEdit.querySelector('#priority-edit');
    const priorityOptions = priorityInput.querySelectorAll('option');
    const dueDateInput = projectEdit.querySelector('#dueDate-edit');
    const projectInput = projectEdit.querySelector('#project-edit');
    const projectOptions = projectInput.querySelectorAll('option');
    console.log(title);
    titleInput.value = title;
    descInput.value = desc;
    descInput.textContent = desc;
    priorityOptions.forEach((option) => {
        console.log(option);
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

function editSubmit(){

    const editModal = document.querySelector('#edit-todo');
    const editForm = editModal.querySelector('form');

    editForm.addEventListener('submit', (e) => {
        const todoIndex = parseInt(editModal.dataset.indexNumber);
        e.preventDefault();
        console.log(e);
        editModal.close();
        editToDo(todoIndex, e);
        openProjectList(e.target[4].value);
    })
}



function editToDo(todoIndex, e) {
    toDoList[todoIndex].title = e.target[0].value;
    toDoList[todoIndex].desc = e.target[1].value;
    toDoList[todoIndex].dueDate = e.target[3].value;
    toDoList[todoIndex].priority = e.target[2].value;
    toDoList[todoIndex].project = e.target[4].value;


}


//project functions

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
        console.log(e.target.textContent);
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
    const todoCards = document.querySelector('.to-dos');
    project = project.replace(/\s+/g, '-').toLowerCase();
    todoCards.classList.value = `to-dos ${project}`;
    while(todoCards.firstChild) {
        todoCards.removeChild(todoCards.lastChild);
    }
    for (const item of toDoList) {
        if (item.project.replace(/\s+/g, '-').toLowerCase() === project) {
            makeToDo(item);
        }
    }
}



export{openProject, makeToDo, openForm, cancelButton, submitButton, defaultButton, editSubmit};