import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Page/Home.jsx'
import Projects from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'


const App = () => {
  return (
    <div className='bg-[var(--bg-color)] px-4 w-full min-h-screen overflow-hidden'>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App