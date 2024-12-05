import { useEffect, useRef } from "react"

export const RefComponentFocus = () => {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor='yellow'
    }, [])
    return (
        <>
            <input type='text' ref={inputRef} />
            {/* <button onClick={()=>inputRef.current.focus()}>Click me</button> */}
        </>
    )
}