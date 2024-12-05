import { useState } from "react"
import axios from 'axios'
export const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault() 
//        fetch('https://jsonplaceholder.typicode.com/posts', {
//        method: 'POST',
//       body: JSON.stringify({
//       title: title,
//       body: body,
//       userId: userId,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
        //   .then((json) => console.log(json));
    //     const postData = async () => {
    //         try {
    //    const response = await
    //   fetch('https://jsonplaceholder.typicode.com/posts',
    //   {
    //   method: 'POST',
    //   body: JSON.stringify({
    //   title: title,
    //   body: body,
    //   userId: userId,
    //  }),
    // headers: {
    // 'Content-type': 'application/json; charset=UTF-8',
    // },
    // })
                
    //             if (!response.ok) {
    //                 throw new Error("Data not send")
    //             }
    //             const data = await response.json()
    //             console.log(data)
    //         }
          
    //         catch (error) {
    //             console.log(error)
    //         }

            
    //     }
        //     postData()
        axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: title,
         body: body,
         userId: userId,  
        })
            .then(response => console.log(response))
        .catch(error=>console.log(error))


    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <input type='text' placeholder='Enter UserId'
                        value={userId}
                        onChange={(e) => setUserId(u => e.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Enter title'
                        value={title}
                        onChange={(e) => setTitle(t => e.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Enter body'
                        value={body}
                        onChange={(e) => setBody(b => e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}