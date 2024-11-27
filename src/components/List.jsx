import {Fruits} from './Fruits'

export const List = ({items=[],category='category'}) => {
    
    
    // fruits.sort((a,b)=>b.name.localeCompare(a.name))
    // fruits.sort((a,b)=>a.calories-b.calories)
    // const lowCalFruits=  fruits.filter(fruit=>fruit.calories<100)
    // const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} &nbsp; { fruit.calories}</li>)
    const listItems =
    //    items.length>0?items.map((fruit) => <Fruits fruit={fruit} />):null
       items.map((fruit) => <Fruits fruit={fruit} />)
    return (
        <div >
          <h2 className='list-category'>{category}</h2>
          <ol className="list-item">{listItems}</ol>
        </div>
    )
}