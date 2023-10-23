

export const TodoItem = ({todo, onDeleteTodo, tachar}) => {
  return (
   
        <li  className="list-group-item d-flex justify-content-between" >
        <span className={`alig-self-center" ${(todo.done) ?  'text-decoration-line-through':''}`}
        onClick={()=>tachar(todo.id)}
        >{todo.descripcion}
        </span>   {/*recordemos que en este span es donde esta la descripcion */}
        <button 
        onClick={()=>onDeleteTodo(todo.id)} //Aqui mandamos a llamar la función y el id que proviene del componente padre que muestra
        className="btn btn-danger"> Eliminar </button>
        </li >
        
  )
}
