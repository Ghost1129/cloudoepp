// import { useState } from 'react'

import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Learnmore from './components/Learnmore'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Learnmore/>
     <Footer/>
    </div>
  )
}

export default App
