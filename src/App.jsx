/* eslint-disable */
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { useRef, useState, useEffect, useContext } from "react";
import Contact from "./components/Contact/contact";
import { PrimeReactContext } from "primereact/api";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)

  const refs = { homeRef, aboutRef, projectsRef, contactRef };
  const { changeTheme } = useContext(PrimeReactContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme !== null) {

      const isDark =  JSON.parse(storedTheme)
      
       setIsDarkMode(isDark);


      //  changeTheme(
      //   isDarkMode ? "lara-light-indigo" : "lara-dark-indigo",
      //   isDarkMode ? "lara-dark-indigo" : "lara-light-indigo",
      //   "theme-link"
      // );

      // const themeLink = document.getElementById("theme-link");
      
      isDark ? changeTheme("lara-light-indigo","lara-dark-indigo",  "theme-link") : ""

       
    }

    
  }, []);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        refs={refs}
      />

      <div ref={homeRef} className="home">
        <Home isDarkMode={isDarkMode} projectsRef ={projectsRef} />
      </div>

      <div ref={aboutRef} className="about">
        <About isDarkMode={isDarkMode} />
      </div>

      <div ref={projectsRef} className="projects" >
        <Projects isDarkMode={isDarkMode} />
      </div>
       <div ref={contactRef} className="contact" >
        <Contact isDarkMode={isDarkMode} className="contact" />
      </div>
    </>
  );
}

export default App;

