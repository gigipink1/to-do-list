import './assets/style.css';
import {editButtons, defaultButton, submitButton, cancelButton, openForm, openProject} from './modules/input'
import {storeToDos, getToDos} from './modules/storage'

openForm();
cancelButton();
submitButton();
openProject();
defaultButton();
editButtons();


window.addEventListener('beforeunload', storeToDos);
//window.addEventListener('reload', storeToDos);
window.addEventListener('load', getToDos)