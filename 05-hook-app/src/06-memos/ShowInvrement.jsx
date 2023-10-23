import React from "react"

export const ShowInvrement = React.memo(({incremento}) => {
console.log('me genere')
  return (
    <button
    className=" btn btn-primary"
    onClick={()=> incremento()}
    >
        incrementar
    </button>
  )
}
)