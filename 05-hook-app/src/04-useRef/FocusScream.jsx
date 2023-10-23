import { useRef } from "react"

export const FocusScream = () => {
    const inputRef = useRef()
  
    const onc=()=>{
        // document.querySelector('input').select()
        //  console.log(inputRef)
        inputRef.current.select()
    }
  return (
   <>
    <h1>Scream</h1>
    <hr />
    <input type="text"
    placeholder="Escribe tu nombre"
    className="form-control"
     ref={inputRef}
    />
    <button onClick={onc} className="btn btn-primary  mt-2"> click</button>
   </>
  )
}
