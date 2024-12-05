import { useState,useEffect } from "react"
import axios from 'axios'
export function PostList() {
    const [posts, setPosts] = useState([])
    const [errorMsg,setErrorMsg]=useState('')
    
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(data => setPosts(data))
        // .catch(err=>console.log(err))
        // const fecthData = async () => {
        //     try {
        //          const response = await fetch('https://jsonplaceholder.typicode.com/post')
        //     if(!response.ok)
        //     {
        //         throw new Error("Network related problem...!!")
        //     }
        //     const data = await response.json()
        //     setPosts(data)
        //     }
        //     catch (err) {
        //         console.log(err)
        //    }

        // }
        // fecthData()

        //  axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         console.log(response)
        //         setPosts(response.data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         // setErrorMsg(error.message)
        //         setErrorMsg("Error retrieving data ")
                
        // })
        const fetchAxios = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data)
            }
            catch (error) {
                setErrorMsg(error.message)
            }
          
        }
       fetchAxios()
    },[])
    return (
        <>
            <ul>
                {
                    posts.length > 0 &&
                    posts.map(post => <li key={post.id}>{post.title }</li>)
                }
                {
                    errorMsg && <div>{errorMsg}</div>
                }
            </ul>
        </>
    )
}