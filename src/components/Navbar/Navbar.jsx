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

  const [automaticHighlightDisabled, setAutomaticHighlightDisabled] =
    useState(false);

  // const [visibleSections, setVisibleSections] = useState([]);

  // useEffect(() => {
  //   function getVisibleHeight(element) {
  //     if (!element) return 0;

  //     const rect = element.getBoundingClientRect();

  //     const visibleTop = Math.max(rect.top, 0);
  //     const visibleBottom = Math.min(rect.bottom, window.innerHeight);

  //     const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  //     return visibleHeight;
  //   }

  //   const sections = [
  //     { id: "home", ref: homeRef },
  //     { id: "about", ref: aboutRef },
  //     { id: "projects", ref: projectsRef },
  //     { id: "contact", ref: contactRef },
  //   ];

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (!automaticHighlightDisabled) {
  //         const updated = new Set();

  //         entries.forEach((entry) => {
  //           const id = entry.target.id;

  //           if (entry.isIntersecting) {
  //             updated.add(id);
  //           } else {
  //             updated.delete(id);
  //           }
  //         });

  //         setVisibleSections(Array.from(updated));

  //         const heights = visibleSections.map((id) => {
  //           const element = document.getElementById(id);
  //           return {
  //             id,

  //             height: getVisibleHeight(element),
  //           };
  //         });

  //         console.log(heights);

  //         const tallest = heights.reduce((max, item) =>
  //           item.height > max.height ? item : max
  //         );

  //         console.log(tallest);

  //         setActiveSection(tallest.id);
  //       }
  //     },
  //     {
  //       threshold: 0,
  //     }
  //   );

  //   sections.forEach((s) => {
  //     if (s.ref.current) observer.observe(s.ref.current);
  //   });

  //   return () => observer.disconnect();
  // }, [
  //   homeRef,
  //   aboutRef,
  //   projectsRef,
  //   contactRef,
  //   visibleSections,
  //   automaticHighlightDisabled,
  // ]);

  useEffect(() => {
  function getVisibleHeight(element) {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
    return Math.max(0, visibleBottom - visibleTop);
  }

  const sections = [
    { id: "home", ref: homeRef },
    { id: "about", ref: aboutRef },
    { id: "projects", ref: projectsRef },
    { id: "contact", ref: contactRef },
  ];

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     console.log(entries)
  //     if (!automaticHighlightDisabled) {
  //       const updated = new Set();

  //       entries.forEach((entry) => {
  //         const id = entry.target.id;
  //         if (entry.isIntersecting) {
  //           console.log(id)
  //           updated.add(id);
  //         }
          
          
  //         else updated.delete(id);
  //       });

  //       const updatedArray = Array.from(updated);
  //       setVisibleSections(updatedArray);

  //       const heights = updatedArray.map((id) => {
  //         const element = document.getElementById(id);
  //         return { id, height: getVisibleHeight(element) };
  //       });

  //       if (heights.length > 0) {
  //         const tallest = heights.reduce((max, item) =>
  //           item.height > max.height ? item : max
  //         );
  //         setActiveSection(tallest.id);
  //       }
  //     }
  //   },
  //   // { threshold: 0 }
  // );

 const observer = new IntersectionObserver(
  () => {
    if (!automaticHighlightDisabled) {
      const currentlyVisible = sections
        .map(section => ({
          id: section.id,
          height: getVisibleHeight(section.ref.current)
        }))
        .filter(s => s.height > 0);

      // setVisibleSections(currentlyVisible.map(s => s.id));

      if (currentlyVisible.length > 0) {
        const tallest = currentlyVisible.reduce((max, item) =>
          item.height > max.height ? item : max
        );

        setActiveSection(tallest.id);
      }
    }
  },
  { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
);

  sections.forEach((s) => s.ref.current && observer.observe(s.ref.current));

  return () => observer.disconnect();
}, [
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  automaticHighlightDisabled,
]);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        setAutomaticHighlightDisabled(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        homeRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveSection("home");

        timeoutRef.current = setTimeout(() => {
          setAutomaticHighlightDisabled(false);
          timeoutRef.current = null;
        }, 1200);
      },
      className: activeSection === "home" ? "menuitem-clicked" : "",
    },
    {
      label: "About",
      icon: "pi pi-user",
      command: () => {
        setAutomaticHighlightDisabled(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveSection("about");

        timeoutRef.current = setTimeout(() => {
          setAutomaticHighlightDisabled(false);
          timeoutRef.current = null;
        }, 1200);
      },

      className: activeSection === "about" ? "menuitem-clicked" : "",
    },
    {
      label: "Projects",
      icon: "pi pi-folder",
      command: () => {
        setAutomaticHighlightDisabled(true);

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
      className: activeSection === "projects" ? "menuitem-clicked" : "",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => {
        setAutomaticHighlightDisabled(true);

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
      className: activeSection === "contact" ? "menuitem-clicked" : "",
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
      <img
        className="navbar-avatar"
        src={contrastIcon}
        width="30"
        height="30"
      />
    </div>
  );

  return (
    <div className={`navbar ${isDarkMode ? "" : "navbar-light"}`}>
      <Menubar model={items} start={navbarName} />
    </div>
  );
}

export default Navbar;
