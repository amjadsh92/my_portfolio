/* eslint-disable */
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from  './components/Home/Home'
import { useState } from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
   <Home isDarkMode={isDarkMode} />
   
   </>
  
  )
}

export default App
