
const initialState=[{
    id:1,
    todo:'recolectar',
    done:false
}]
const miFuncion=(state=initialState, action={} )=>{ //Necesario destructurar el action
  if(action.type==='[TODO] add todo'){
    return [...state, action.payload]
  }
return state;

}

let todos=miFuncion();


const newTodo={
    id:2,
    todo:'recolectar gema',
    done:false
}

const addTodoAction={
type:'[TODO] add todo', 
payload:newTodo

}

todos=miFuncion(todos, addTodoAction)
console.log({state: todos})