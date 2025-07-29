import React, { useState } from 'react'
import './RegisterPage.css'

const LoginPage = () => {
    const [username, setUsername] =useState("")  
    const [password, setPassword] =useState("")
  return (
    <>
    <div className='Registerblc border border-3 border-dark p-5 w-100'>
    <h2>Sign In</h2>
    <form> 
      <div className="mb-3">
        <label htmlFor="LoginInputuser1" className="form-label">UserName</label>
        <input type="text" className="form-control" id="LoginInputuser1" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          
      </div>
      <div className="mb-3">
        <label htmlFor="LoginInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="LoginInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="LoginCheck1"/>
          <label className="form-check-label" htmlFor="LoginCheck1">Remember Me</label>
      </div>
      <button type="submit" className="btn RegBTN">Login</button>
    </form>
    </div>
    </> 
  )
}

export default LoginPage