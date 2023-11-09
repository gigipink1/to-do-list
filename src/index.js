import './assets/style.css';
import {createToDo} from './modules/todo';
import {openForm} from  './modules/input';
import { openProject } from './modules/dom';


console.log('hello');
const todo = [];
todo.push(createToDo('do housework', 'do all housework', 'today', 'high'));
console.log(todo);
openForm();
openProject();
