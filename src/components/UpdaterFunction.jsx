//updater function:- a function passed as an argument to setState() usually
//ex: setYear(year+1) change to setYear(updateFunction) updater function specified
//as arrow function setYear(arrow function)
//allow for safe updates based on the previous state.Used with multiple state updates
//and asynchronous function
//good practice to use updater functions
//use the current state to calculate next state
//set functions do not trigger an update
//React batches together state updates for performance reasons
//next state becomes the current state after an update
//if update doesn't happen next state becomes pending state
//take the pending state to calculate next state
//React puts your updater function in queue(waiting in line)
//during the next render,it will calulate them in the same order

import { useState } from "react"
export const UpdaterFunction = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount((c)=>c+1)
        //update
        setCount(c=>c+1)
        //update
        setCount(c=>c+1)
        //update
    }
    const decrement = () => {
        setCount(c=>c-1)
    }
    const reset = () => {
        setCount(c=>0)
    }
    return (
        <div className="counter-container">
            <p className="count-display">Count: { count}</p>
            <button
                onClick={decrement}
                className="counter-button">
                Decrement
            </button>
            <button
                onClick={reset}
                className="counter-button">
                Reset
            </button>
            <button
                onClick={increment}
                className="counter-button">
                Increment
            </button>
        </div>
    )
}