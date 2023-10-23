import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
const {counter, incremento, restar, resetear}=useCounter();

  return (
<>
<h1>Counter con hook:{counter}</h1>  
<hr />
<button className="btn btn-primary" onClick={incremento}>+1</button>
<button className="btn btn-primary" onClick={resetear}>Resetear</button >
<button className="btn btn-primary"onClick={restar}>-1</button>
</>

)
}
