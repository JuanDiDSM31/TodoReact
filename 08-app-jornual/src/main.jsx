import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { JornualApp } from './JornualApp.jsx'
import { BrowserRouter  } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
    <BrowserRouter>
    <JornualApp />
    </BrowserRouter>
    
    
  </React.StrictMode>

)
