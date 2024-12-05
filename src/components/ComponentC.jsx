import { ComponentD } from "./ComponentD"
import { UserContext } from "./ComponnetA"
import { useContext } from "react"
export const ComponentC = () => {
    const user = useContext(UserContext)
   
     return (
        <div className="box">
             <h1>Component C</h1>
             <h2>{`Hello Again : ${user}` }</h2>
             <ComponentD />
        </div>
       
   ) 
}