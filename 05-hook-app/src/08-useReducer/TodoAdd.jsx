import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => { //aqui siempre se desestructura el argumento que madaremos
    const { onInputChange, reset, descripcion}=useForm({
        descripcion:''
    })

const onformSubmit=(event)=>{
    event.preventDefault();
    if(descripcion.length<=1) return;
const NewTodo={
    id:new Date().getTime(),
    done:false,
    descripcion:descripcion,
    
}
onNewTodo(NewTodo);
reset()
}


  return (
   <>
     <form onSubmit={onformSubmit}>
                <h4>Agregar todo</h4>
                <hr />
                <input type="text" 
                 placeholder="¿Que haremos hoy ?"
                 className="form-control"
                 name="descripcion"
                 value={descripcion}
                 onChange={onInputChange}
                />
                <button
                type="submit"
                className="btn btn-primary mt-2"

                >Agregar</button>
            </form>
   </>
  )
}
