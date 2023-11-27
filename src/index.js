import './assets/style.css';
import {editButtons, defaultButton, submitButton, cancelButton, openForm, openProject} from './modules/input'
import {storeToDos, getToDos, storeProjects, getProjects} from './modules/storage'

openForm();
cancelButton();
submitButton();
openProject();
defaultButton();
editButtons();


window.addEventListener('beforeunload', () => { 
    storeToDos();
    storeProjects();
});
window.addEventListener('load', () => {
     getToDos();
     getProjects();
    })