// /* eslint-disable */
// import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Home from  './components/Home/Home'
// import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import { useState, useEffect } from 'react'

// function App() {
//   // const storedTheme = localStorage.getItem("isDarkMode");
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("isDarkMode");
//     if (storedTheme !== null) {
//       setIsDarkMode(JSON.parse(storedTheme)); 
//     }
//   }, []);

 
//    useEffect(() => {
//      const storedTheme = localStorage.getItem("isDarkMode");
//     localStorage.setItem("isDarkMode",JSON.parse(storedTheme) );

    
//     const themeLink = document.getElementById("theme-link");
//     if (themeLink) {
//       themeLink.setAttribute(
//         "href",
//         isDarkMode
//           ? "/themes/lara-dark-indigo/theme.css"
//           : "/themes/lara-light-indigo/theme.css"
//       );
//     }
//   }, [isDarkMode]);

//   return (
//     <>
//    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//    <Home isDarkMode={isDarkMode} />
//    <About isDarkMode={isDarkMode} />
//    <Projects isDarkMode={isDarkMode} />
   
//    </>
  
//   )
// }

// export default App


/* eslint-disable */
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { useRef, useState, useEffect } from "react";
import Contact from "./components/Contact/contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)

  const refs = { homeRef, aboutRef, projectsRef, contactRef };

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme !== null) {
      setIsDarkMode(JSON.parse(storedTheme));
    }
  }, []);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        refs={refs}
      />

      <div ref={homeRef}>
        <Home isDarkMode={isDarkMode} />
      </div>

      <div ref={aboutRef}>
        <About isDarkMode={isDarkMode} />
      </div>

      <div ref={projectsRef}>
        <Projects isDarkMode={isDarkMode} />
      </div>
       <div ref={contactRef}>
        <Contact isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default App;

