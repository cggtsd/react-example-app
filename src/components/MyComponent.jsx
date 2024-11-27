import { useContext, useEffect, useReducer, useState } from "react"
//React Hooks:- special functions that allow functional components
//to use React features without writing class components(React v16.8)
// (useState,useEffect,useContext,useReducer and more)
//useState():- a react hook that allows the creation of a stateful
//variable and a setter function to update the value in the Virtual DOM
//[name,setName]
//when we use setter function of stateful variable it will trigger 
//a rerender of component,normal variables can't trigger rerender


const MyComponent = () => {
    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(0)
    const [isEmployed,setIsEmployed]=useState(false)
    

    const updateName = () => {
        // name = 'Fathima'
       setName('Fathima')
        console.log(name)
    }
    const updateAge = () => {
        setAge(age+2)
    }

    const updateEmployeeStatus = () => {
        setIsEmployed(!isEmployed)
    }
    return (
        <>
            <p>Name:{name}</p>
            <button
            onClick={updateName}>Set Name</button>
            <p>Age:{age}</p>
            <button
            onClick={updateAge}>Set Age</button>
            <p>Status:{isEmployed?'Yes':'No'}</p>
            <button
            onClick={updateEmployeeStatus}>Toggle Status</button>
        </>
    )
}

export default MyComponent