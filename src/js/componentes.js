import { Todo } from '../classes';
import { todoList } from '../index';

//Referencias en html
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const AnchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo ) => {
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''  }" data-id="${ todo.id }">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado ) ? 'checked' : '' }>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

 divTodoList.append( div.firstElementChild );

 return div;

}

//eventos

txtInput.addEventListener('keyup', ( event ) => {
    if( event.keyCode === 13 && txtInput.value.length > 0 ){
        console.log( txtInput.value );
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo ( nuevoTodo );

        crearTodoHtml ( nuevoTodo );
        txtInput.value = '';

    }

});

divTodoList.addEventListener('click', ( event ) => {
    //console.log( 'clickeado' );
    //console.log( event.target.localName );
    
    const nombreElemento = event.target.localName;  // input, label, boton
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    //console.log(nombreElemento)
    if ( nombreElemento.includes('input') ) {    // click en el check 
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if ( nombreElemento.includes('button') ){  //hay que borrar el todo
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
    }
    // console.log( todoElemento );
    // console.log( todoId );
    //console.log(todoList);

});


btnBorrar.addEventListener('click', (event) =>{
    todoList.eliminarCompletados();

    //eliminar desde el finalde la lista para que no se recorra el indice que recorre el arreglo

    for( let i = divTodoList.children.length - 1; i >= 0; i-- ){
        const elemento = divTodoList.children[i];
       // console.log(elemento);
       if( elemento.classList.contains('completed')){
           divTodoList.removeChild(elemento);
       }
    }

});


ulFiltros.addEventListener('click', (event) => {
    console.log( event.target.text );
    const filtro = event.target.text;
    if( !filtro ) { return; };
    
    AnchorFiltros.forEach( elem => elem.classList.remove('selected'));
    
    console.log( event.target );
    event.target.classList.add('selected');

    for ( const elemento of divTodoList.children ){
        //console.log( elemento );
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch( filtro ){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
                case 'Completados':
                    if(!completado){
                        elemento.classList.add('hidden');
                    }
                    break;
            }

    }

});