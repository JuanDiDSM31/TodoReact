import { AuthProvider } from "./auth/context/AuthProvider"
import { RouterApp } from "./router/RouterApp"


export const HeroesApp = () => {
    // console.log('Hola mundo')
  return (
    <AuthProvider>
   <RouterApp/>
    </AuthProvider>
  )
}
