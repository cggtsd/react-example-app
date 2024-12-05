import { useState ,useEffect,useRef} from "react"

export const RefComponent = () => {
    // const [number, setNumber] = useState(0)
   const ref= useRef(0)
    useEffect(() => {
        // console.log(ref)
         console.log("COMPONENT RERENDERED")
    })
    return (
        <div>
            <button onClick={() => {
                ref.current++
                console.log(ref.current)
            } }>Click me !</button>
        </div>
    )
}

//useState() - stores some sort of value or an array or an object.
//the component rerenders when the state value changes
//useRef() - 'use reference' does not cause rerenders when the value changes
//when you want a component to remember some information ,but you don't
//want that information to trigger new render
//Accessing/interacting with DOM elements
//handling focus,animations and transitions
//managing timers and intervals
//useRef returns ref object with a single current property initially 
//set to the initial value you provide