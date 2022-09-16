import React, { useState } from 'react'

const FormPr = () => {
  const [username,setUsername] = useState('');
  const handleSubmit = () => {
    console.log('form submit clicked...');
    console.log('form data',username);
    setUsername('');
  }

  const input_username = (event) => {
    console.log('input username is triggered...',event.target.value);
    setUsername(event.target.value);    
  }
  return (
    <>
        <h2>Registration Form</h2>
        <br></br>
        <label>Name</label>
        <input type = "text" onChange={input_username} value={username}/>
        <br></br>
        <button onClick={handleSubmit}>Register</button>
    </>
  )
}

export default FormPr