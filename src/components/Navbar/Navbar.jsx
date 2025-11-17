// /* eslint-disable */
// import { Menubar } from "primereact/menubar";
// import "./Navbar.scss";
// import contrastIcon from "../../assets/images/contrast.png";
// import { useState } from "react";
// import { useContext } from "react";
// import { PrimeReactContext } from "primereact/api";

// function Navbar({isDarkMode, setIsDarkMode}) {
  

//   const [isClicked, setIsClicked] = useState({
//     home: true,
//     about: false,
//     projects: false,
//     game: false,
//     contact: false,
//   });

//   const { changeTheme } = useContext(PrimeReactContext);

//   const items = [
//     {
//       label: "Home",
//       icon: "pi pi-home",
//       command: () =>
//         setIsClicked({
//           about: false,
//           projects: false,
//           game: false,
//           contact: false,
//           home: true,
//         }),
//       className: `${isClicked.home ? "menuitem-clicked" : ""}`,
//     },
//     {
//       label: "About",
//       icon: "pi pi-user",
//       command: () =>
//         setIsClicked({
//           about: true,
//           projects: false,
//           game: false,
//           contact: false,
//           home: false,
//         }),
//       className: `${isClicked.about ? "menuitem-clicked" : ""}`,
//     },
//     {
//       label: "Projects",
//       icon: "pi pi-folder",
//       command: () =>
//         setIsClicked({
//           about: false,
//           projects: true,
//           game: false,
//           contact: false,
//           home: false,
//         }),
//       className: `${isClicked.projects ? "menuitem-clicked" : ""}`,
//     },
   
//     {
//       label: "Contact",
//       icon: "pi pi-envelope",
//       command: () =>
//         setIsClicked({
//           about: false,
//           projects: false,
//           game: false,
//           contact: true,
//           home: false,
//         }),
//       className: `${isClicked.contact ? "menuitem-clicked" : ""}`,
//     },

//     {
//       template: (item, options) => {
//         const handleClick = (e) => {
//           e.stopPropagation();
//           e.preventDefault();

//           changeTheme(
//             isDarkMode ? "lara-dark-indigo" : "lara-light-indigo",
//             isDarkMode ? "lara-light-indigo" : "lara-dark-indigo",
//             "theme-link"
//           );
          
          
//           setIsDarkMode((prev) => !prev);
//           localStorage.setItem("isDarkMode", !isDarkMode);
//         };

//         return (
//           <button
//             className="p-link theme-toggle-btn"
//             onClick={handleClick}
//             type="button"
//             aria-label="Toggle theme"
//           >
//             <div className="lightmode-block">
//               <i
//                 className={`${isDarkMode ? "darkmode-icon pi pi-moon" : "lightmode-icon pi pi-sun"}`}
//               />{" "}
//               <span
//                 className={`${isDarkMode ? "darkmode-text" : "lightmode-text"}`}
//               >
//                 {isDarkMode ? "Dark mode" : "Light mode"}
//               </span>
//             </div>
//           </button>
//         );
//       },
//     },
//   ];

//   const navbarName = (
//     <div className="navbar-leftside">
//       <span className="navbar-name">Amjad Sharafeddine</span>
//       <img  className="navbar-avatar" src={contrastIcon} width="30" height="30" />
//     </div>
//   );

//   return (
//     <div className={`navbar ${isDarkMode ? "" : "navbar-light"}`}>
//       <Menubar model={items} start={navbarName} />
//     </div>
//   );
// }

// export default Navbar;

/* eslint-disable */
import { Menubar } from "primereact/menubar";
import "./Navbar.scss";
import { useState, useEffect, useContext } from "react";
import { PrimeReactContext } from "primereact/api";
import contrastIcon from "../../assets/images/contrast.png";

function Navbar({ isDarkMode, setIsDarkMode, refs }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = refs;
  const { changeTheme } = useContext(PrimeReactContext);

  const [activeSection, setActiveSection] = useState("home");

  // 🔥 IntersectionObserver logic
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (current) {
              setActiveSection(current.id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => observer.disconnect();
  }, [homeRef, aboutRef, projectsRef, contactRef]);

  // 🔥 Highlight menu item by checking activeSection
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => homeRef.current.scrollIntoView({ behavior: "smooth" }),
      className: activeSection === "home" ? "menuitem-clicked" : "",
    },
    {
      label: "About",
      icon: "pi pi-user",
      command: () => aboutRef.current.scrollIntoView({ behavior: "smooth" }),
      className: activeSection === "about" ? "menuitem-clicked" : "",
    },
    {
      label: "Projects",
      icon: "pi pi-folder",
      command: () => projectsRef.current.scrollIntoView({ behavior: "smooth" }),
      className: activeSection === "projects" ? "menuitem-clicked" : "",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => contactRef.current.scrollIntoView({ behavior: "smooth" }),
      className: activeSection === "contact" ? "menuitem-clicked" : "",
    },
    {
  //     template: () => (
  //       <button
  //         className="p-link theme-toggle-btn"
  //         onClick={() => {
  //           changeTheme(
  //             isDarkMode ? "lara-dark-indigo" : "lara-light-indigo",
  //             isDarkMode ? "lara-light-indigo" : "lara-dark-indigo",
  //             "theme-link"
  //           );

  //           setIsDarkMode((prev) => !prev);
  //           localStorage.setItem("isDarkMode", !isDarkMode);
  //         }}
  //       >
  //         <i className={isDarkMode ? "pi pi-moon" : "pi pi-sun"} />
  //       </button>
  //     ),
  //   },
  // ];

  // return (
  //   <div className={`navbar ${isDarkMode ? "" : "navbar-light"}`}>
  //     <Menubar model={items} />
  //   </div>
  // );
   
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
