

function createToDo(title, desc, priority, dueDate, project = 'default') {
    

    return {title, desc, dueDate, priority, project}

}

function editToDo(todoIndex, e) {
    console.log(todoIndex);
    todoIndex.title = e.target[0].value;
    todoIndex.desc = e.target[1].value;
    todoIndex.dueDate = e.target[3].value;
    todoIndex.priority = e.target[2].value;
    todoIndex.project = e.target[4].value;

}




export {createToDo, editToDo};