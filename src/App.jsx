import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThemeBtn from './components/ThemeBtn'
import Hero from './components/Hero'
import Journey from './components/Journey'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </>
  )
}

export default App