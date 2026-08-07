import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Brother</h1>
    <ThemeBtn />
    </>
  )
}

export default App
