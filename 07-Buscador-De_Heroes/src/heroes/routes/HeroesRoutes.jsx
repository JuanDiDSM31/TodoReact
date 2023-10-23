import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Marvel } from "../pages/Marvel"
import { DC } from "../pages/DC"
import { Search } from "../pages/Search"
import { Hero } from "../pages/Hero"


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
   <Route path="marvel"  element={<Marvel/>}     />
   <Route path="dc"  element={<DC/>}     />
   <Route path="search"  element={<Search/>}     />
   <Route path="hero/:id"  element={<Hero/>}     />
 
   <Route  path="/" element={<Navigate to="/marvel"/>} />
    </Routes>
    </div>
  
    </>
   
  )
}
