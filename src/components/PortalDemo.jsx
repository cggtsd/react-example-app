import React from 'react'
import ReactDom from 'react-dom'
import { createPortal } from 'react-dom'
function PortalDemo() {
  return createPortal (
      <div>
          <h1>Portal Demo</h1>
      </div>,
      document.getElementById('portal-root')
  )
}

export default PortalDemo

/* React portals provide a way to render children into a DOM
node that exists outside the DOM hierarchy of the parent 
component.we have only one dom element in index.html that we
were mounting the react application into.
React portals provide the ability to break out of thew DOM tree
A component can be rendered intoa DOM node that is not under the 
root eleemnt
Step 1: Add a dom node that falls outsise the root eleemnt
<div id="portal-root"></div>
step2: create a new component
step 3: we will use ReactDOM.createPortal to insert this component
under the portal-root node

*/ 