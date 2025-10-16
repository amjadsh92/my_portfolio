/* eslint-disable */
import { Menubar } from "primereact/menubar";
import "./Navbar.scss";
import contrastIcon from "../../assets/images/contrast.png"; 
import {useRef,  useState } from "react";

function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const menubarRef = useRef(null);
  
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "About",
      icon: "pi pi-user",
    },
    {
      label: "Projects",
      icon: "pi pi-folder",
    },
    {
      label: "Game",
      icon: "pi pi-box",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
    
      {

    template: (item, options) => {
      const handleClick = (e) => {
        e.stopPropagation();            
        e.preventDefault();
        setIsDarkMode(prev => !prev);   
      };


      //  if (window.innerWidth < 960 && menubarRef.current?.hide) {
      //       menubarRef.current.hide();
      //     }

      if (options && typeof options.onClick === "function") {
        options.onClick(e);
      }
        

      return (
        <button
          className="p-link theme-toggle-btn"
          onClick={handleClick}
          type="button"
          aria-label="Toggle theme"
        >
          <div className="lightmode-block"> 
          <i className={`lightmode-icon pi ${isDarkMode ? "pi-moon" : "pi-sun"}`} /> <span className="lightmode-text">{isDarkMode ? "Dark mode" : "Light mode"}</span>
          </div> 
        </button>
       
      );
    }
  }
  ];

  const navbarName =<div className="navbar-leftside">
    <span className="navbar-name">Amjad Sharafeddine</span>
    <img src={contrastIcon} width="30" height="30" />

  </div> 
  

  return (
    <div className="navbar">
      <Menubar model={items} start={navbarName} ref={menubarRef}  />
    </div>
  );
}

export default Navbar;
