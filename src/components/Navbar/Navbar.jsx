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
  // const [isClicked, setIsClicked] = useState(false)

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
//             const visible = entries.filter((entry) => entry.isIntersecting);
//             const topMost = visible.reduce((prev, curr) =>
//   prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
// );
            const current = sections.find(
              (s) => s.ref.current === entry.target
            );
            // if(current && activeSection === current.id){
            //    setAutomaticHighlightDisabled(false)
            //   //  setActiveSection(current.id);
              
              
            // }
            
            // if (current && !automaticHighlightDisabled ) {
              
            //   setActiveSection(current.id);
              

            // }

             if (current ) {
              
              setActiveSection(current.id);
              break;
              

            }
              
           
            
          }}
        }}
      ,
      { threshold: 0.5 }
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
          homeRef.current.scrollIntoView({ behavior: "smooth" })
          setActiveSection("home")
          setTimeout(() => setAutomaticHighlightDisabled(false), 800) 
          
          
        }
      ,
 
                    
      className: activeSection === "home" ? "menuitem-clicked" : "",
    },
    {
      label: "About",
      icon: "pi pi-user",
      command: () => { 
        
        setAutomaticHighlightDisabled(true) 
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
        setActiveSection("about")
        setTimeout(() => setAutomaticHighlightDisabled(false), 800) 
          
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
          
          projectsRef.current.scrollIntoView({ behavior: "smooth" })
          setActiveSection("projects")
          setTimeout(() => setAutomaticHighlightDisabled(false), 800) 
          
          
          
          
        },
      className: (activeSection === "projects") ? "menuitem-clicked" : "",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => {
          
       
          setAutomaticHighlightDisabled(true) 
          
          contactRef.current.scrollIntoView({ behavior: "smooth" })
          setActiveSection("contact")
          setTimeout(() => setAutomaticHighlightDisabled(false), 800) 
         
          
        
          
      
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



// /* eslint-disable */
// import { Menubar } from "primereact/menubar";
// import "./Navbar.scss";
// import { useState, useEffect, useContext, useMemo } from "react";
// import { PrimeReactContext } from "primereact/api";
// import contrastIcon from "../../assets/images/contrast.png";

// function Navbar({ isDarkMode, setIsDarkMode, refs }) {
//   const { homeRef, aboutRef, projectsRef, contactRef } = refs;
//   const { changeTheme } = useContext(PrimeReactContext);

//   const [activeSection, setActiveSection] = useState("home");
//   const [isClicked, setIsClicked] = useState(false);

//   // Memoize sections to avoid recreating array on every render
//   const sections = useMemo(
//     () => [
//       { id: "home", ref: homeRef },
//       { id: "about", ref: aboutRef },
//       { id: "projects", ref: projectsRef },
//       { id: "contact", ref: contactRef },
//     ],
//     [homeRef, aboutRef, projectsRef, contactRef]
//   );

//   // ---------------------------------------------------------
//   // ⭐ Clean Intersection Observer (your requested version)
//   // ---------------------------------------------------------
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries.filter((e) => e.isIntersecting);

//         if (visible.length === 0) return;

//         // If the user clicked a nav button → ignore observer
//         if (isClicked) return;

//         // Case 1: Only one visible entry
//         if (visible.length === 1) {
//           const match = sections.find(
//             (s) => s.ref.current === visible[0].target
//           );
//           if (match) setActiveSection(match.id);
//           return;
//         }

//         // Case 2: Multiple visible → choose top-most
//         const topMost = visible.reduce((prev, curr) =>
//           prev.boundingClientRect.top < curr.boundingClientRect.top
//             ? prev
//             : curr
//         );

//         const winner = sections.find(
//           (s) => s.ref.current === topMost.target
//         );

//         if (winner) setActiveSection(winner.id);
//       },
//       { threshold: 0.5 }
//     );

//     // Start observing sections
//     sections.forEach((s) => {
//       if (s.ref.current) observer.observe(s.ref.current);
//     });

//     return () => observer.disconnect();
//   }, [sections, isClicked]);

//   // ---------------------------------------------------------
//   // Menu Items (NOT modified except using your same classNames)
//   // ---------------------------------------------------------

//   const items = [
//     {
//       label: "Home",
//       icon: "pi pi-home",
//       command: () => {
//         setIsClicked(true);
//         homeRef.current.scrollIntoView({ behavior: "smooth" });
//         setActiveSection("home");
//         setTimeout(() => setIsClicked(false), 800);
//       },
//       className: activeSection === "home" ? "menuitem-clicked" : "",
//     },
//     {
//       label: "About",
//       icon: "pi pi-user",
//       command: () => {
//         setIsClicked(true);
//         aboutRef.current.scrollIntoView({ behavior: "smooth" });
//         setActiveSection("about");
//         setTimeout(() => setIsClicked(false), 800);
//       },
//       className: activeSection === "about" ? "menuitem-clicked" : "",
//     },
//     {
//       label: "Projects",
//       icon: "pi pi-folder",
//       command: () => {
//         setIsClicked(true);
//         projectsRef.current.scrollIntoView({ behavior: "smooth" });
//         setActiveSection("projects");
//         setTimeout(() => setIsClicked(false), 800);
//       },
//       className: activeSection === "projects" ? "menuitem-clicked" : "",
//     },
//     {
//       label: "Contact",
//       icon: "pi pi-envelope",
//       command: () => {
//         setIsClicked(true);
//         contactRef.current.scrollIntoView({ behavior: "smooth" });
//         setActiveSection("contact");
//         setTimeout(() => setIsClicked(false), 800);
//       },
//       className: activeSection === "contact" ? "menuitem-clicked" : "",
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
//                 className={`${
//                   isDarkMode
//                     ? "darkmode-icon pi pi-moon"
//                     : "lightmode-icon pi pi-sun"
//                 }`}
//               />
//               <span
//                 className={`${
//                   isDarkMode ? "darkmode-text" : "lightmode-text"
//                 }`}
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
//       <img
//         className="navbar-avatar"
//         src={contrastIcon}
//         width="30"
//         height="30"
//       />
//     </div>
//   );

//   return (
//     <div className={`navbar ${isDarkMode ? "" : "navbar-light"}`}>
//       <Menubar model={items} start={navbarName} />
//     </div>
//   );
// }

// export default Navbar;

