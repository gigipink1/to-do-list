function openForm() {
    const todoBtn = document.querySelector('.todo-btn');
    const newToDo = document.querySelector('#new-todo');

    todoBtn.addEventListener('click', () => {
        newToDo.showModal()
    })
    
}

function openProject() {
const projectBtn = document.querySelector('.project-btn');
projectBtn.addEventListener('click', newProjectInput);
}
export {openForm, openProject};