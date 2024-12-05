import { useEffect, useState } from "react"
import axios from "axios"
export const DataFetching = () => {
    const [post, setPost] = useState({})
    const [errMsg, setErrMsg] = useState('')
    const [id, setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    
    useEffect(() => {
       
        const fetchPost = async () => {
            try {
               const response = await
                    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
                console.log(response)
            setPost(response.data) 
            }
            catch (error) {
                setErrMsg(error.message)
            }
            
        }
        fetchPost()
    },[idFromButtonClick])
    return (
        <>
            <input type='text' value={id}
                onChange={e => setId(i => e.target.value)} />
            <button onClick={()=>{setIdFromButtonClick(i=>id)}}>Fetch Post</button>
            {
                <div>{post.title}</div>
            } 
            {
                errMsg && <div>{errMsg}</div>
            }
        </>
    )
}