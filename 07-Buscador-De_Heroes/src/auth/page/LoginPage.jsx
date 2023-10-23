import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContex } from "../context/AuthContex"


export const LoginPage = () => {

  const {login, logout} = useContext(AuthContex)
  const navilogin=useNavigate()
  const lastPath=localStorage.getItem('lastPath') || "/";
  const onLogin=()=>{
    login('Juan Domínguez ')
    navilogin(lastPath,{
      replace:true
    })
  }
  return (
   <>
   <div className="container mt-5">
    <h1>Login</h1>
    <hr />
    <button 
    onClick={onLogin}
    className="btn btn-primary">
      Entrar
    </button>
   </div>
   </>
  )
}
