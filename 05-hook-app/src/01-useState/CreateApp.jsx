import { useState } from "react"

export const CreateApp = () => {
    const [counter, setcounter] = useState({
        counter1:10,
        counter2:20, 
        counter3:30
    })
    const {counter1, counter2, counter3}=counter
  return (

    <>
    <h1>counter: {counter1}</h1>
    <h1>counter: {counter2}</h1>
    <h1>counter: {counter3}</h1>

    <hr />
    {/* primer boton */}
    <button className="btn btn-primary" onClick={()=>setcounter({
      ...counter, 
      counter1:counter1+1
        // reoasar esta destructuración
        } )}>+1</button>
        {/* <button className="btn btn-primary" onClick={()=>setcounter({
        counter1:counter1 ,
        counter2:counter2+1,
        counter3:counter3
        
        } )}>+1</button> */}
    {/* segundo boton */}
{/* <button className="btn btn-primary" onClick={()=>setcounter({
        counter1:counter1 ,
        counter2:counter2,
        counter3:counter3+1
        
        } )}>+1</button> */}
        
    {/* <button></button> */}
    </>
  )
}
