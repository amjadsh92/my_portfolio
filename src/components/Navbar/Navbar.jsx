/* eslint-disable */
import { Menubar } from "primereact/menubar";
import "./Navbar.scss";
import contrastIcon from "../../assets/images/contrast.png";
import { useState } from "react";
import { useContext } from "react";
import { PrimeReactContext } from "primereact/api";

function Navbar({isDarkMode, setIsDarkMode}) {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const [isClicked, setIsClicked] = useState({
    home: true,
    about: false,
    projects: false,
    game: false,
    contact: false,
  });

  const { changeTheme } = useContext(PrimeReactContext);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () =>
        setIsClicked({
          about: false,
          projects: false,
          game: false,
          contact: false,
          home: true,
        }),
      className: `${isClicked.home ? "menuitem-clicked" : ""}`,
    },
    {
      label: "About",
      icon: "pi pi-user",
      command: () =>
        setIsClicked({
          about: true,
          projects: false,
          game: false,
          contact: false,
          home: false,
        }),
      className: `${isClicked.about ? "menuitem-clicked" : ""}`,
    },
    {
      label: "Projects",
      icon: "pi pi-folder",
      command: () =>
        setIsClicked({
          about: false,
          projects: true,
          game: false,
          contact: false,
          home: false,
        }),
      className: `${isClicked.projects ? "menuitem-clicked" : ""}`,
    },
    {
      label: "Game",
      icon: "pi pi-box",
      command: () =>
        setIsClicked({
          about: false,
          projects: false,
          game: true,
          contact: false,
          home: false,
        }),
      className: `${isClicked.game ? "menuitem-clicked" : ""}`,
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () =>
        setIsClicked({
          about: false,
          projects: false,
          game: false,
          contact: true,
          home: false,
        }),
      className: `${isClicked.contact ? "menuitem-clicked" : ""}`,
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
          // changeTheme(
          //   isDarkMode ? "lara-dark-cyan" : "lara-light-cyan",
          //   isDarkMode ? "lara-light-cyan" : "lara-dark-cyan",
          //   "theme-link"
          // );
          
          setIsDarkMode((prev) => !prev);
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
      <img src={contrastIcon} width="30" height="30" />
    </div>
  );

  return (
    <div className={`navbar ${isDarkMode ? "" : "navbar-light"}`}>
      <Menubar model={items} start={navbarName} />
    </div>
  );
}

export default Navbar;
