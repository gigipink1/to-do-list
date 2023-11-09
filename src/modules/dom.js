function newProjectInput(){
    const projectList = document.querySelector('.project-list');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('newProject');
    projectList.appendChild(input);
}

function openProject() {
    const projectBtn = document.querySelector('.project-btn');
    projectBtn.addEventListener('click', newProjectInput);
    }

export{openProject};