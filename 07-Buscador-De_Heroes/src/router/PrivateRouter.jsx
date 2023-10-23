import { useContext } from "react"
import { AuthContex } from "../auth/context/AuthContex"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRouter = ({children}) => {
  const {logged}=useContext(AuthContex)

  const {pathname, search}=useLocation();
  const lastPath=pathname+search;
  localStorage.setItem('lastPath', lastPath)
  console.log('first')

  //abajo retornar la condición de proteccion de ruta 
  return (logged)?children: <Navigate to="/login"/>
}
