import React, { useState } from 'react'
import './RegisterPage.css'

 const RegisterPage = ({setIsRegister}) => {
  const [username, setUsername] =useState("")
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  function handleRegister(event){
    event.preventDefault()
    const payload = {
      name:username,
      email:email,
      password:password
    }
    console.log(payload,"payload")
    localStorage.setItem('user',JSON.stringify(payload))
    setIsRegister(true)

  }

  return (

    <>
    <div className='Registerblc  p-5 w-100'>
      <h2>Create New Account</h2>
    <form onSubmit={handleRegister} > 
      <div className="mb-3">
        <label htmlFor="exampleInputuser1" className="form-label">UserName</label>
        <input type="text" className="form-control" id="exampleInputuser1" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1"  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
          
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn RegBTN">Register</button>
    </form>
    </div>
    </>
  )
}
export default RegisterPage
