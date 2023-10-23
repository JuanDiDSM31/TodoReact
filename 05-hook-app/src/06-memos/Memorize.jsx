import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"


export const Memorize = () => {
    const {counter, incremento}=useCounter(10)
    const [show, setshow] = useState(true)
  return (
    <>
    <h1> counter: <Small value={counter}/> </h1>
    <hr />
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
