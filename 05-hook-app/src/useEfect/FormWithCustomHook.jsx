import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {
 

const{formState, onInputChange, reset}=useForm({
    username:'',
    email:'',
    password:''
})
const{username, email, password}=formState
const [res, setres] = useState(formState)



    return (
    <>
    <h1>Formulario con Custom Hook</h1>
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
        {/* tercer input */}
        <input type="password"
    className="form-control mt-2"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={onInputChange}
        />
    <button onClick={reset}  className="btn btn-primary mt-2">resetear</button>

       
    </>
  )
}
