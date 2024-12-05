//useContext() => react hook that allows
//you to share values between multiple levels of components
//without passing props through each level

import { ComponentB } from "./ComponentB"
import { useState } from "react"
import { createContext } from "react"

export const UserContext=createContext()
export const ComponnetA = () => {
   const [user,setUser]=useState("CGG")
    return (
        <div className="box">
            <h1>Component A</h1>
            <UserContext.Provider value={user}>
                 <ComponentB />
            </UserContext.Provider>
           
        </div>
       
   ) 
}

//By passing  props down each of those nested components
//is called 'props drilling'
//passing props down this long chain can become tedious
//better solution is that to work with useContext() Hook

//Steps
//PROVIDER COMPONENT
//import {createContext} from 'react'
//export const MyContext= createContext()
//<MyContext.Provider value={vALUE}>
//<Child/>
//</MyContext.Provider>

//CONSUMER COMPONENT
//import {useContext} from 'react'
//import {MyContext} from './component'
//const value=useContext(MyContext)