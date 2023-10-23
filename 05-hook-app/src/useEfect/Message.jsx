import { useEffect, useState } from "react"


export const Message = () => {

    const [cords, setcords] = useState({x:0, y:0})
    useEffect(() => {
        const onMove=({x,y})=>{
           
            setcords({x, y})
            // console.log(cord)

        }
        window.addEventListener('mousemove', onMove)
        // lo que esta dentro de esta función es cuando la condición se cumple

    
      return () => {
        window.removeEventListener('mousemove', onMove)
        // en el return es cuado la condición se esta dejando de cumplir 

      }
    }, [])
    
  return (
   
    <>
    <h1>Usuario ya existe</h1>
    {JSON.stringify(cords)}
    </>
  )
}
