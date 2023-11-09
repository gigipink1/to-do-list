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

export {openForm, cancelButton};