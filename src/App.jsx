import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='display-3'>Calculadora Dólar</h1>
    <img className='logo' src="/public/dollar.png" alt="" />
    </>
  )
}

export default App
