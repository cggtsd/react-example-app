import React, { useReducer } from 'react'

const initialState = {
    counter1: 0,
    counter2:2
 }
function reducer(state, action) {
   
    switch (action.type) {
        case 'increment': return {...state,counter1:state.counter1+action.value}
        case 'decrement': return {...state,counter1:state.counter1-action.value}
        case 'increment5': return {...state,counter1:state.counter1+action.value}
        case 'decrement5': return {...state,counter1:state.counter1-action.value}
        case 'increment2': return {...state,counter2:state.counter2+action.value}
        case 'decrement2': return {...state,counter2:state.counter2-action.value}
        case 'increment25': return {...state,counter2:state.counter2+action.value}
        case 'decrement25': return {...state,counter2:state.counter2-action.value}
        case 'reset': return {
            counter1: 0,
            counter2:2
        }
        default:return initialState
    }
}
function ReducerHook() {
  const [newState,dispatch] = useReducer(reducer,initialState)
    return (
        <>
      <h1>Count :{newState.counter1}</h1>
      <div>
          <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
          <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
          <button onClick={() => dispatch({ type: 'reset', value: 0 })}>Reset</button>
       </div>
      <div>
          <button onClick={()=>dispatch({type:'increment5',value:5})}>Increment 5</button>
          <button onClick={()=>dispatch({type:'decrement5',value:5})}>Decrement 5</button>
    
       </div>
      <h1>Count :{newState.counter2}</h1>
      <div>
          <button onClick={()=>dispatch({type:'increment2',value:2})}>Increment 2</button>
          <button onClick={()=>dispatch({type:'decrement2',value:2})}>Decrement 2</button>
          
       </div>
      <div>
          <button onClick={()=>dispatch({type:'increment25',value:5})}>Increment 5</button>
          <button onClick={()=>dispatch({type:'decrement25',value:5})}>Decrement 5</button>
    
       </div>
       </>
  )
}

export default ReducerHook