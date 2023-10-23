
import { useState } from "react"
import { ShowInvrement } from "./ShowInvrement"
import { useCallback } from "react"

export const CallBack = () => {
const [counter, setcounter] = useState(10)
  const incrementar=useCallback(
  () => {
    // console.log('+1?')
     setcounter( (value)=>value+1 )
  },
  [],
)

    // const incrementar=()=>{
    //     setcounter(counter+1)
    // }
  return (
 <>

 <h1>Use Callback: {counter}</h1>
 <hr />
 <ShowInvrement incremento={incrementar}/>
 </>
  )
}
