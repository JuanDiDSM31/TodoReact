import { useContext } from "react"
import { userContext } from "./context/UserContext"
import { json } from "react-router-dom"


export const LoginPage = () => {
  const {hola, user}= useContext(userContext) //Lo que esta dentro del parentesis es el archivo que vamos o debemos de importr
  console.log(hola, user)
  return (
   <>
   <h1>LoginPage</h1>
   <hr />
  <pre>
    {JSON.stringify(user, null, 3)}
  </pre>
   </>
  )
}
