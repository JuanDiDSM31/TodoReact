import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { HomePage } from "./HomePage"
import { Navbar } from "./Navbar"
import { UseProvider } from "./context/UseProvider"

export const MainApp = () => {
  return (
<UseProvider>
<h1>main de mi ap</h1>
<Navbar/>
<hr />

{/* creacion de las rutas */}
<Routes>  
{/* Recordemos que esta es como el main donde queremos que se rendericen paginas externas dentro del mismo archivo */}
{/* lo que va dentro del path es la forma en como nos vamos a redireccionar en la pagina es decir si esta con una sola letra con esa letra es con la ue nos vamos a dirigir dentro de la pagina */}
<Route path="/" element={<HomePage/>} />
<Route path="p" element={<LoginPage/>} /> 

<Route path="about" element={<AboutPage/>} />
{/* con el comodin de /* es a donde nos vamos a redireccionar por default en caso de no encontrar ninguna ruta es como un error 404 */}
{/* <Route path="/*" element={<HomePage/>} />   */}
{/* Esta es otra forma de redireccionar en caso de no encontrar pero la diferencia es que mandara a la ruta de la pagina por default y no a la escrita o no encontrada  lo que va colocado dentro del to es como le hayas puesto a tu pagina o el "/"*/}
<Route path="/*" element={<Navigate to="/about" />} /> 


</Routes>
{/* fin de las rutas */}

</UseProvider>
  )
}
