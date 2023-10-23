import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JornualApp } from '../JornualApp'
import { JournalRoutes } from '../journoal/routes/JournalRoutes'

export const AppRoute = () => {
  return (
    <Routes>
        {/* login */}
        <Route  path="/auth/*" element={<AuthRoutes/>} />

        {/* entrada de autenticación */}
        <Route  path="/*"  element={<JournalRoutes/>}/>
    </Routes>
  )
}
