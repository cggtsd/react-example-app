
//click event:- An interaction when a user clicks on a
//specific element
//we can respond to clicks by passing a callback to the onClick
//event handler
// event parameter
//with click events we are automatically provided with
//an event argument.Its an object that describes the event that occured

const ButtonClick = () => {
    // let count=0
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++
    //         console.log(`${name} you clicked me ${count} times`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // const handleClick=(e)=>console.log(e)
    const handleClick=(e)=>e.target.innerHTML='OUCH 😊'
      
   
    return (
        <button onDoubleClick={(e)=>handleClick(e)}>
            Click me
        </button>
    )
}

export default ButtonClick