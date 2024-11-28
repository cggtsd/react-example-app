import { useState } from "react"
import {Child} from './Child'
export const StateArray = () => {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])
    
    function handleAddFood(e){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
        setFoods(f=>[...f,newFood])
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_,i)=>i!==index))
    }
    return (
        <div>
            <ul>
                {
                    foods.map((food, index) =>
                        <li key={index}
                            onClick={() => handleAddFood(index)}>
                            {food}
                        </li>)
                }
            </ul>
            <input type="text"
                id="foodInput"
                placeholder="Enter food name"
            /> 
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}