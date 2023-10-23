import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"

export const Navbar = () => {
  return (
  <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">UseContext</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          <NavLink  
          className={({isActive})=>
            `nav-link ${isActive ? 'active': ''}`}
            to="/">
            {/* Dentro de la entrada de la etiqueta navlink es donde ira el link de direccion y la clase */}
            Home
          </NavLink>
          <NavLink  
          className={({isActive})=>
            `nav-link ${isActive ? 'active': ''}`}
            to="about">
            {/* Dentro de la entrada de la etiqueta navlink es donde ira el link de direccion y la clase */}
            AboutPage
          </NavLink>

          <NavLink  
          className={({isActive})=>
            `nav-link ${isActive ? 'active': ''}`}
            to="p">
            {/* Dentro de la entrada de la etiqueta navlink es donde ira el link de direccion y la clase */}
            LoginPage
          </NavLink>
       
      </ul>
    </div>
  </div>
</nav>
  
 
  </>
  )
}
