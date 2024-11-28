import { useState } from "react"
import {Child} from './Child'
export const ArrayOfObjects = () => {
    const [cars, setCars] = useState([])
    const[carYear,setCarYear]=useState(new Date().getFullYear())
    const[carMake,setCarMake]=useState("")
    const [carModel, setCarModel] = useState("")
    
    function handleYearChange(e) {
        setCarYear(c=>e.target.value)
    }
    function handleMakeChange(e) {
        setCarMake(c=>e.target.value)
    }
    function handleModelChange(e) {
        setCarModel(c=>e.target.value)
    }

    function handleAddCar(e) {
        const newCar = {
            year: carYear,
            make: carMake,
            model:carModel
        }
        setCars(c => [...c, newCar])
        setCarYear(c=>new Date().getFullYear())
        setCarMake(c=>"")
        setCarModel(c=>"")
    }

    function handleRemoveCar(index) {
        setCars(cars.filter((_,i)=>index!==i))
    }
    return (
        <div>
            <h1>List of car objects</h1>
            <ul>
                {
                    // cars.map((car, index) =>
                    //     <li
                    //         onClick={() => handleRemoveCar(index)} key={index}>
                    //         {car.year} {car.make} {car.model}
                    //     </li>)   
                    <Child itemsList={cars} handleRemoveItem={handleRemoveCar}/>
                }
            </ul>
            <input type="number"
                value={carYear}
                onChange={handleYearChange}
            placeholder="enter car year"/>
            <br />
             <input type="text"
                value={carMake}
                onChange={handleMakeChange}
             placeholder="enter car make"/>
            <br/>
             <input type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="enter car model" />
            <br/>
            <button onClick={handleAddCar}>Add car</button>
        </div>
    )
}