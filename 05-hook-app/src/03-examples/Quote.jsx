import {useLayoutEffect, useRef, useState } from "react"

export const Quote = ({author, quote}) => {
// 1er hook
  const pRef = useRef();
  // segundo hook
  const [boxSize, setboxSize] = useState({ width:0, height:0})
  // 3er FormWithCustomHook, hook nuevo
useLayoutEffect(() => {
 const {height, width}=pRef.current.getBoundingClientRect();
setboxSize({height, width});
}, [quote]);


  return (
   <>
    <blockquote className="blockquote text-end"
    style={{display:'flex'}}
    >
    <p ref={pRef} className="mb-1">{quote}</p>
    <footer  className="blockquote-footer">{author}</footer>
</blockquote >

    <code>
     {JSON.stringify(boxSize)}
    </code>
   </>
  )
}
