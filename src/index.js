import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();


//  console.log( todoList.todos );
// todoList.todos.forEach( todo =>  crearTodoHtml ( todo ) );
todoList.todos.forEach( crearTodoHtml ); //  se puede abreviar si el primer argumento del callback (foreach o cualquier metodo) 
                                            // que se envía es el unico elemento de la funcion 

//console.log( 'todos - ', todoList.todos );
const newTodo = new Todo('Aprende JavaScript');
//todoList.nuevoTodo( newTodo );
//todoList.todos[0].imprimirClase();
//newTodo.imprimeClase();

//console.log('todos', todoList.todos );
//const tarea = new Todo('Aprender JavaScript!!');
//const tarea2 = new Todo('Comprar un unicornio');

//console.log(tarea);

//todoList.nuevoTodo( tarea );
//todoList.nuevoTodo( tarea2 );

//console.log( todoList );

//crearTodoHtml( tarea );


//localStorage.setItem('mi-local-key','ABC123');
//sessionStorage.setItem('mi-session-key','ABC123');

//setTimeout( ()=> {
//    localStorage.removeItem('mi-key');
//}, 1500 );

