// import React from 'react'
// import ReactDom from 'react-dom'
// import { createPortal } from 'react-dom'
// export const Modal = ({onClose,children}) => {
//   return createPortal(
//       <div style={{
//           position: 'absolute',
//           top: '0',
//           bottom: '0',
//           left: '0',
//           right: '0',
//           display: 'grid',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'rgba(0,0,0,0.3)',
//       }} onClick={onClose}>
//           <div
//           style={{
//             padding: 20,
//             background: '#fff',
//             borderRadius: '2px',
//             display: 'inline-block',
//             minHeight: '300px',
//             margin: '1rem',
//             position: 'relative',
//             minWidth: '300px',
//             boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//             justifySelf: 'center',
//               }}            
//           >
//               {children}  
//               <hr />
//            <button onClick={onClose}>Close</button>   
//         </div>
          
//       </div>,document.getElementById('modal-root'))
    
// }
