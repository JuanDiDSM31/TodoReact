import { memo } from "react"


export const Small = memo(({value}) => {
console.log('redibujar')
  return (
    <small>{value}</small>
  )
})
