import React from 'react'
import ReactDom from 'react-dom/client'
 



import './index.css'
import { FirstApp } from './FirstApp'



// import { holamundo } from './holamundo'
// holamundo


// import { holamundo } from './holamundo'
//  holamundo
//  function App(){
//      return <h1>Hola mundo Huevos a todos</h1>
//  }

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <FirstApp value={20}/>
    </React.StrictMode>
    // La importación se hace desde el modo stricto
)