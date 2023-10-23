import { useState } from "react"
import { userContext } from "./UserContext"

// const user= {
//     id:1, 
//     name:'Juan ',
//     apellido:' Dominguez', 
//     corre: 'al222111490@gmail.com'
//         }
export const UseProvider = ({children}) => {
  const [user, setuser] = useState()
  // hola:'mundo', user: user
  return (
  <userContext.Provider value={{user, setuser}}>
    {children}
  </userContext.Provider>
  )
}
