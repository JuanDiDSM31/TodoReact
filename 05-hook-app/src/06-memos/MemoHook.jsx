import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

// empezar a utilizar memorize
const heavy =(iterar=100)=>{
for (let i=0; i<iterar; i++)
console.log('termino')
return `${iterar} finalizado`
}

export const MemoHook = () => {


    const {counter, incremento}=useCounter(400)

    const [show, setshow] = useState(true)

    
   const messageMemo= useMemo(()=>heavy(counter), [counter]);
  return (
    <>
    <h1> counter: <small>{counter}</small> </h1>
    <hr />
    <h1>{messageMemo}</h1>
    <button onClick={incremento}
    className="btn btn-primary"
    >
        +1
    </button>
    <button className="btn btn-outline-primary"
    onClick={()=>{setshow(!show)}}
    >
        show: {JSON.stringify(show)}
    </button>
    </>
  )
}
