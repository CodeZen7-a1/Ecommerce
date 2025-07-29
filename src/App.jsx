import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage  from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)
  const [isRegister, setIsRegister] = useState(false)

  return (
    <>
   
    {isRegister ?  (<LoginPage/>):(<RegisterPage setIsRegister={setIsRegister}/>)}
     <Dashboard />
    </>
  )
}

export default App
