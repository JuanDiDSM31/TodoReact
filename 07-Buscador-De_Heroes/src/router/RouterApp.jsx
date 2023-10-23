import { Route,  Navigate, Routes } from "react-router-dom"
import { Marvel } from "../heroes/pages/Marvel"
import { DC } from "../heroes/pages/DC"
import { LoginPage } from "../auth/page/LoginPage"
import { Navbar } from "../ui/components/Navbar"
import { HeroesApp } from "../HeroesApp"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"


export const RouterApp = () => {
  return (
<>

<Routes>

   {/* <Route path="login" element={<LoginPage/>}/> */}

    
    <Route  path="login/*" element= {<PublicRouter>
      <Routes>
      <Route path="/*" element={<LoginPage/>}/>
      </Routes>
    </PublicRouter>}     />



   <Route path="/*" 
   element={
    <PrivateRouter>
    <HeroesRoutes/>
    </PrivateRouter>   
   }
   />
   {/* <Route path="/*"  element={<HeroesRoutes/>}     /> */}
   
</Routes>
</>
  )
}
