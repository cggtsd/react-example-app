import React, { useState } from 'react'
import useInput from '../../hooks/useInput'

const UserForm = () => {
     
   const [firstName,bindFirstName,resetFirstName]= useInput('')
   const [lastName,bindLasttName,resetLasttName]= useInput('')
   
    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLasttName()
    }
  return (
      <div>
          <form>
              <div>
                  <label>First Name</label>
                  <input type='text' {...bindFirstName} />
              </div>
              <div>
                  <label>Last Name</label>
                  <input type='text' {...bindLasttName} />
              </div>
              <button onClick={submitHandler}>Submit</button>
          </form>
    </div>
  )
}

export default UserForm