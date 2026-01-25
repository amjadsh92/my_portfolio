/* eslint-disable */
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { useRef, useState, useEffect } from "react";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("isDarkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById("boot-loader")?.remove();
        document.documentElement.classList.remove("lock-scroll");
      }, 500);
    });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { homeRef, aboutRef, projectsRef, contactRef };

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        refs={refs}
      />

      <div id="home" ref={homeRef} className="home">
        <Home isDarkMode={isDarkMode} projectsRef={projectsRef} />
      </div>

      <div id="about" ref={aboutRef} className="about">
        <About isDarkMode={isDarkMode} />
      </div>

      <div id="projects" ref={projectsRef} className="projects">
        <Projects isDarkMode={isDarkMode} />
      </div>
      <div id="contact" ref={contactRef} className="contact">
        <Contact isDarkMode={isDarkMode} className="contact" />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
