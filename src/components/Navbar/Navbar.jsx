/* eslint-disable */
import { Menubar } from "primereact/menubar";
import "./Navbar.scss";
import contrastIcon from "../../assets/images/contrast.png"; 

function Navbar() {
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
    icon: "pi pi-sun"
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
