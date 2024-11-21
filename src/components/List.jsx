
export const List = () => {
    
    const fruits = [
        { id:1,name: "Apple", calories: 50 },
        { id:2,name: "Orange", calories: 20 },
        { id:3,name: "Banana", calories: 110 },
        { id:4,name: "Coconut", calories: 40 },
        { id:5,name: "Pineapple", calories: 22 }
    ]
    // fruits.sort((a,b)=>b.name.localeCompare(a.name))
    // fruits.sort((a,b)=>a.calories-b.calories)
     const lowCalFruits=  fruits.filter(fruit=>fruit.calories<100)
    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} &nbsp; { fruit.calories}</li>)
    return (
        <ol>{listItems}</ol>
    )
}