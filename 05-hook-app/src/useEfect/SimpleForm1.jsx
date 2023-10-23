import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm1 = () => {
  const [formState, setFormState] = useState({
    username:'Juan',
    email:'al222111490@gmail.com'
  })
  const {username, email}=formState

const onInputChange=({target})=>{
    const {name, value}=target
    setFormState({
        ...formState,
        [name]:value
    })

}
// useEffect sirve para mandar funciones al hacer una serie cantidad de cambios
useEffect(()=>{
    
},[]) //El arregl vacio significa que el useEffect se disparara solo una ves
// useefect del formulario
useEffect(() => {
 
}, [formState])

// useefect del email
useEffect(() => {
    
   }, [email]) //Esta es la funcion que cambiara para wue se dispare la funcion




    return (
    <>
    <h1>Formulario simple</h1>
    <hr />

    <input type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}

    />
    {/* segundo input */}
    <input type="email"
    className="form-control mt-2"
    placeholder="Correo@correo.com"
    name="email"
    value={email}
    onChange={onInputChange}
        />

        {
            // las && significan entonces por lo siguiente es lo que mostrara lo que esta en el parentesis es lo que se esta evaluando
            (username==='Juan2') && <Message/>
        }
    </>
  )
}
