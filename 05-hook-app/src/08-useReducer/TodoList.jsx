import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[], onDeleteTodo, tachar}) => {
  return (
    <>
     {/* todo list */}
     <ul className="list-group">
            {
                 todos.map (todo=>
                <TodoItem key={todo.id} 
                todo={todo}
                onDeleteTodo={onDeleteTodo} 
                tachar={tachar}
                />)
            }
        
        </ul>
        {/* fin de todo list */}
    </>
  )
}
