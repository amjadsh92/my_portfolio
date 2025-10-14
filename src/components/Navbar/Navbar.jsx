/* eslint-disable */
import { Menubar } from "primereact/menubar";
import { ToggleButton } from 'primereact/togglebutton';
import "./Navbar.scss";
import contrastIcon from "../../assets/images/contrast.png"; 
import { useState } from "react";

function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  
  
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
        
        template: <ToggleButton onLabel="" offLabel="" onIcon="pi pi-sun" offIcon="pi pi-moon" checked={checked} onChange={(e) => setChecked(e.value)}  className="lightmode" />

        // icon: isDarkMode ? "pi pi-moon" : "pi pi-sun",
        // command: () => {

        //     setIsDarkMode((prev)=>!prev)


        // }
    // template: (item, options) => {
    //   const handleClick = (e) => {
    //     e.stopPropagation();            
    //     e.preventDefault();
    //     setIsDarkMode(prev => !prev);   
    //   };

    //   return (
    //     <button
    //       className="p-link theme-toggle-btn"
    //       onClick={handleClick}
    //       type="button"
    //       aria-label="Toggle theme"
    //     >
    //       <i className={`pi ${isDarkMode ? "pi-moon" : "pi-sun"}`} />
    //     </button>
    //   );
    // }
  }
  ];

  const navbarName =<div className="navbar-leftside">
    <span className="navbar-name">Amjad Sharafeddine</span>
    <img src={contrastIcon} width="30" height="30" />

  </div> 
  

  return (
    <div className="navbar">
      <Menubar model={items} start={navbarName}  />
    </div>
  );
}

export default Navbar;
