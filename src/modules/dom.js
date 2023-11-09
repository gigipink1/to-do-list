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

export{openProject};