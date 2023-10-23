import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
// import {HooksApp1} from './HooksApp1'

// import { CreateApp } from './01-useState/CreateApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import './index.css'
import { SimpleForm1 } from './useEfect/SimpleForm1'
import { FormWithCustomHook } from './useEfect/FormWithCustomHook'
import { MultiplescustomHooks } from './03-examples/MultiplescustomHooks'
import { FocusScream } from './04-useRef/FocusScream'
import { Layout } from './05-useLayoutEffect/layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallBack } from './06-memos/CallBack'
import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/introReducer'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
  <MainApp/>
  </BrowserRouter>


  //  </React.StrictMode>
)
