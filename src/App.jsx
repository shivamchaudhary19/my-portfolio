import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Brother</h1>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
