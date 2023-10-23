import { useState } from 'react'

import PropTypes from 'prop-types'

// const newMessage={
//   nombre:'Juan Diego',
//   apellido:'Domínguez Castaño',
//   edad:20,
//   direccion:{
//     calle:'independencia', 
//     CP:520080,
//     Municipio:'Otzolotepect'
//   }
// }

// const {nombre, apellido, direccion:{calle}}=newMessage

//  const b =()=>{
//    console.log('diste click')
//  }

export const FirstApp = ({value}) => {
const [counter, c]=useState(value)
// const [restar, r]=useState(0)


  const b =()=>{
    // dentro de esta función es lo qu le indicaras lo que haga el hook
    c(counter+1);
    // console.log('diste click')
  }
  const c1=()=>{
    c(counter-1);
  }
  const reset=()=>{
    c(value);
  }

  // console.log(props)
  return (
    <>
    <h1>CounterApp</h1>
    <p > {counter}</p>
    <button onClick={b}>
      +1
    </button>
    <button onClick={c1}>--1</button>
    <button onClick={reset}>resset</button>
    {/* <h1>Mi nombre es: {nombre} mi calle es: {calle}</h1> */}
    {/* <h1>{JSON.stringify(newMessage)}</h1> */}
    </>
  );
}
// FirstApp.PropTypes={
// title: PropTypes.string.isRequired,
// subTitle: PropTypes.string.isRequired
// }
// FirstApp.defaultProps={
//   title: 'No hay titulo',
//   subTitle:'No hay subtitulo'
// }
