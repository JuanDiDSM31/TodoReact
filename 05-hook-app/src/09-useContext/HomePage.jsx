import { useContext } from "react"
import { userContext } from "./context/UserContext"


export const HomePage = () => {
  const {user, setuser}= useContext(userContext)
  return (
   <>
   <h1>HomePage <small>{user?.name}</small></h1>
   <hr />
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>
    <button 
    onClick={()=>setuser({id:1, name:'juan', correo:'al222111490@gmail.com'})}
    className="btn btn-primary">Agregar ususario</button>
   </>
  )
}
