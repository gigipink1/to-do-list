import './assets/style.css';
import {createToDo} from './modules/todo';
import {openForm, cancelButton} from  './modules/input';
import { openProject, makeToDo } from './modules/dom';


console.log('hello');
const todo = [];
todo.push(createToDo('do housework', 'do all housework', 'today', 'high'));
console.log(todo);
openForm();
cancelButton();
openProject();
makeToDo(todo[0]);

