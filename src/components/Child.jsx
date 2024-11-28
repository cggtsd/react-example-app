export const Child = ({itemsList,handleRemoveItem}) => {
    return (

   itemsList.length>0&&itemsList.map((item, index) =>
             <li
               onClick={() => handleRemoveItem(index)}
               key={index}>{item.year} {item.make} {item.model}
              </li>)
    )
}