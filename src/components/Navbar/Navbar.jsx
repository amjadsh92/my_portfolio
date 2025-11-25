/* eslint-disable */
import { Menubar } from "primereact/menubar";
import "./Navbar.scss";
import { useState, useEffect, useContext, useRef } from "react";
import { PrimeReactContext } from "primereact/api";
import contrastIcon from "../../assets/images/contrast.png";

function Navbar({ isDarkMode, setIsDarkMode, refs }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = refs;
  const { changeTheme } = useContext(PrimeReactContext);
  
  const timeoutRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  

  const [automaticHighlightDisabled, setAutomaticHighlightDisabled] = useState(false)

  
  
  useEffect(() => {



    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        
        if(!automaticHighlightDisabled){
        for(let entry of entries){
          if (entry.isIntersecting) {
            
            const current = sections.find(
              (s) => s.ref.current === entry.target
            );
          

             if (current) {
              
              setActiveSection(current.id);
              
              

            }
              
           
            
          }}
        }}
      ,
      { threshold: 0.7 }
    );

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    }
  
  );
  
    return () => observer.disconnect();
  }, [homeRef, aboutRef, projectsRef, contactRef, automaticHighlightDisabled]);




  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => 
        { 

          
          setAutomaticHighlightDisabled(true) 
         
          if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
          }

          homeRef.current.scrollIntoView({ behavior: "smooth" });
          setActiveSection("home");

          
          timeoutRef.current = setTimeout(() => {
              setAutomaticHighlightDisabled(false);
              timeoutRef.current = null; 
          }, 1200);
          
          
        }
      ,
 
                    
      className: activeSection === "home" ? "menuitem-clicked" : "",
    },
    {
      label: "About",
      icon: "pi pi-user",
      command: () => { 
        
        setAutomaticHighlightDisabled(true) 
        
          if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
          }

          aboutRef.current.scrollIntoView({ behavior: "smooth" });
          setActiveSection("about");

          
          timeoutRef.current = setTimeout(() => {
              setAutomaticHighlightDisabled(false);
              timeoutRef.current = null; 
          }, 1200);
          
          }
          
        
      
          
      ,
      className: (activeSection === "about") ? "menuitem-clicked" : "",
    },
    {
      label: "Projects",
      icon: "pi pi-folder",
      command: () =>  
        { 
          
          setAutomaticHighlightDisabled(true) 
          
          
          if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
          }

          projectsRef.current.scrollIntoView({ behavior: "smooth" });
          setActiveSection("projects");

         
          timeoutRef.current = setTimeout(() => {
              setAutomaticHighlightDisabled(false);
              timeoutRef.current = null; 
          }, 1200);
          
          
          
          
        },
      className: (activeSection === "projects") ? "menuitem-clicked" : "",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => {
          
       
          setAutomaticHighlightDisabled(true) 
          
          
          if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
          }

          contactRef.current.scrollIntoView({ behavior: "smooth" });
          setActiveSection("contact");

          
          timeoutRef.current = setTimeout(() => {
              setAutomaticHighlightDisabled(false);
              timeoutRef.current = null; 
          }, 1200);
          
        
          
      
      },
      className: (activeSection === "contact" ) ? "menuitem-clicked" : "",
    },
    {
 
   
      template: (item, options) => {
        const handleClick = (e) => {
          e.stopPropagation();
          e.preventDefault();

          changeTheme(
            isDarkMode ? "lara-dark-indigo" : "lara-light-indigo",
            isDarkMode ? "lara-light-indigo" : "lara-dark-indigo",
            "theme-link"
          );
          
          
          setIsDarkMode((prev) => !prev);
          localStorage.setItem("isDarkMode", !isDarkMode);


        };

        return (
          <button
            className="p-link theme-toggle-btn"
            onClick={handleClick}
            type="button"
            aria-label="Toggle theme"
          >
            <div className="lightmode-block">
              <i
                className={`${isDarkMode ? "darkmode-icon pi pi-moon" : "lightmode-icon pi pi-sun"}`}
              />{" "}
              <span
                className={`${isDarkMode ? "darkmode-text" : "lightmode-text"}`}
              >
                {isDarkMode ? "Dark mode" : "Light mode"}
              </span>
            </div>
          </button>
        );
      },
    },
  ];

  const navbarName = (
    <div className="navbar-leftside">
      <span className="navbar-name">Amjad Sharafeddine</span>
      <img  className="navbar-avatar" src={contrastIcon} width="30" height="30" />
    </div>
  );

  return (
    <div className={`navbar ${isDarkMode ? "" : "navbar-light"}`}>
      <Menubar model={items} start={navbarName} />
    </div>
  );
}


export default Navbar;



