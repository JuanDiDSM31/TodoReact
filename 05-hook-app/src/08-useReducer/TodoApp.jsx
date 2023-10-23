import { useEffect, useReducer } from "react"
import { TodoReducer } from "./TodoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"


export const TodoApp = () => {
  const {todos, handleNewTodo, handleDeleteTodo, handletachar}=useTodos()
   

  return (
   <>
    <h1>Tareas: {todos.length}   <span>         pendientes: {todos.filter(todo=>!todo.done).length}</span></h1>
    <hr />
    <div className="row">
        <div className="col-7">
            {/* inicio */}
           <TodoList todos={todos}
           onDeleteTodo={handleDeleteTodo}
           tachar={handletachar}
           />
           {/* fin */}
        </div>
        <div className="col-5">

          {/* inicio del form */}
        <TodoAdd onNewTodo={handleNewTodo}/>
          {/* fin del form */}
        </div>
    </div>
   </>
  )
}
