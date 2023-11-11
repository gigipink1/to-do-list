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
        const options = document.createElement('option');
        const project = document.querySelector('#project');
        options.textContent = name;
        project.appendChild(options);
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

export{openProject, makeToDo};