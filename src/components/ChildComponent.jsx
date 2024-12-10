import React from 'react'

function ChildComponent({greet}) {
  return (
      <div>
          <button onClick={() => greet('child')}>
              Greet Parent
          </button>
    </div>
  )
}

export default ChildComponent