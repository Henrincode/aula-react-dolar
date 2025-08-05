import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='display-3'>Calculadora Dólar</h1>
    <img className='logo' src="/public/dollar.png" alt="" />
    <br />
    <button className='btn btn-primary'>Click Aqui</button>
    </>
  )
}

export default App
