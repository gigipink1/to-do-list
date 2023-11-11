import './assets/style.css';
import {createToDo} from './modules/todo';
import {openForm, cancelButton, submitButton} from  './modules/input';
import { openProject, makeToDo } from './modules/dom';


console.log('hello');
const todoex = [];
todoex.push(createToDo('do housework', 'do all housework', 'today', 'high'));
openForm();
cancelButton();
submitButton();
openProject();

