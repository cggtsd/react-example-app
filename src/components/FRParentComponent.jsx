import React, { useRef } from 'react'
import FRInput from './FRInput'
function FRParentComponent() {
    const inputRef=useRef(null)
  return (
      <div>
          <FRInput ref={inputRef } />
          <button onClick={() => inputRef.current.focus()}>
              Focus Input
          </button>
    </div>
  )
}

export default FRParentComponent

//Ref forwarding is a technique for automatically passing a ref
//through a component to one of its children