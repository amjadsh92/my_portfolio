/* eslint-disable */
import { Menubar } from "primereact/menubar";
import "./Navbar.scss";
import contrastIcon from "../../assets/images/contrast.png"; 
import {useState } from "react";

function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClicked, setIsClicked] = useState(
    { home:false,
      about:false,
      projects:false,
      game:false,
      contact:false

  })
  
  
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => setIsClicked({
      about:false,
      projects:false,
      game:false,
      contact:false,
      home:true }),
      className: `${isClicked.home ? "menuitem-clicked" : ""}`
    },
    {
      label: "About",
      icon: "pi pi-user",
      command: () => setIsClicked({
      about:true,
      projects:false,
      game:false,
      contact:false,
      home:false }),
      className: `${isClicked.about ? "menuitem-clicked" : ""}`
    },
    {
      label: "Projects",
      icon: "pi pi-folder",
      command: () => setIsClicked({
      about:false,
      projects:true,
      game:false,
      contact:false,
      home:false }),
      className: `${isClicked.projects ? "menuitem-clicked" : ""}`
    },
    {
      label: "Game",
      icon: "pi pi-box",
      command: () => setIsClicked({
      about:false,
      projects:false,
      game:true,
      contact:false,
      home:false }),
      className: `${isClicked.game ? "menuitem-clicked" : ""}`
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => setIsClicked({
      about:false,
      projects:false,
      game:false,
      contact:true,
      home:false }),
      className: `${isClicked.contact ? "menuitem-clicked" : ""}`
    },
    
      {

    template: (item, options) => {
      const handleClick = (e) => {
        e.stopPropagation();            
        e.preventDefault();
        setIsDarkMode(prev => !prev);   
      };


      

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
    <div className = {`${isDarkMode ?  "navbar-dark" : "navbar"}`}>
      <Menubar model={items} start={navbarName}   />
    </div>
  );
}

export default Navbar;
