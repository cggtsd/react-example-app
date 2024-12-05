//useEffect()- React hook that tells react to DO SOME CODE when some
//thing happens (Pick One):
//The component rerenders
//The component mounts (component is created and appended to DOM)
//The state of a value changes

import { useEffect, useState } from "react";

//useEffect(function,[dependencies])
//1.useEffect(function) Runs - effect every rerender
//2.useEffect(function,[])-Runs only on mount
//3.useEffect(function,[value])- Runs on mount+ when value changes

//uses
//1.EventListeners
//2.DOM manipulation
//3.Subscription(real-time updates)
//4.fetching data from an API
//5.cleanup when a componnet will unmount
export function EffectComponent() {
    //Example 1
    // const [count, setCount] = useState(0)
    // const [color,setColor]=useState("green")
    
    // function addCount() {
    //     setCount(c=>c+1)
    // }
    // function subtractCount() {
    //     setCount(c=>c-1)
    // }
    // function changeColor() {
    //    setColor(c=>c==="green"?"red":"green")
    // }

    // useEffect(() => {
    //     document.title = `count:${count} color:${color}`
    //     // document.title = `My Counter Program`
    // },[count,color])
    
    // return (
    //     <>
    //         <p style={{color:color}}>Count:{count}</p>
    //         <button onClick={addCount}>ADD</button>
    //         <button onClick={subtractCount}>SUBTRACT</button>
    //         <button onClick={changeColor}>CHANGE COLOR</button>
    //     </>
    // )

    //Example 2
    const [width,setWidth]=useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    
    useEffect(() => {
    window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")
        return () => {
            window.removeEventListener("reszie", handleResize)
            console.log('EVENT LISTENER REMOVED')
    }    
  
    },[])
   
    useEffect(() => {
        document.title=`size:${width} ${height}`
    })
  
    // const handleResize = (e) => {
    //     setWidth(w=>w=window.innerWidth)
    //     setHeight(h=>h=window.innerHeight)
    // }
    function handleResize(e) {
        setWidth(w=>w=window.innerWidth)
        setHeight(h=>h=window.innerHeight)
    }
    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}