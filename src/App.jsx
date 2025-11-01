/* eslint-disable */
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from  './components/Home/Home'
import { useState, useEffect } from 'react'

function App() {
  // const storedTheme = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme !== null) {
      setIsDarkMode(JSON.parse(storedTheme)); 
    }
  }, []);

 
   useEffect(() => {
     const storedTheme = localStorage.getItem("isDarkMode");
    localStorage.setItem("isDarkMode",JSON.parse(storedTheme) );

    
    const themeLink = document.getElementById("theme-link");
    if (themeLink) {
      themeLink.setAttribute(
        "href",
        isDarkMode
          ? "/themes/lara-dark-indigo/theme.css"
          : "/themes/lara-light-indigo/theme.css"
      );
    }
  }, [isDarkMode]);

  return (
    <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
   <Home isDarkMode={isDarkMode} />
   
   </>
  
  )
}

export default App
