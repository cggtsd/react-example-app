import React from 'react'
import ChildComponent from './ChildComponent'
function GreetParent() {
    const greetParent = (name) => {
        alert(`Hello ${name}`)
    }
  return (
      <div>
          <ChildComponent greet={greetParent} /> 
      </div>
  )
}

export default GreetParent