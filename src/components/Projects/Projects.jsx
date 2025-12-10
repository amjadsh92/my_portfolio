/* eslint-disable */
import "./Projects.scss";
import shortUrlImg from "../../assets/images/urlshortener-image.png";
import reactLogo from "../../assets/images/react.png";
import expressLogo from "../../assets/images/express.png";
import scssLogo from "../../assets/images/scss.png";
import postgreLogo from "../../assets/images/postgre3.png";
import prismaLogo from "../../assets/images/prismaORM.png";
import primeReactLogo from "../../assets/images/primereact.png";
import passportJSLogo from "../../assets/images/passportLogo.png";
import regexLogo from "../../assets/images/regexImage.png";
import cssLogo from "../../assets/images/css.png";
import bootstrapLogo from "../../assets/images/bootstrapLogo.png";
import htmlLogo from "../../assets/images/html2.png";
import javascriptLogo from "../../assets/images/javascript.png";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

function Projects({ isDarkMode }) {

  const [visible, setVisible] = useState([true,true])

  const projects = [
    {
      id: "1",
      title: "URL Shortener",
      description: `Full-Stack React app that transforms a long URL 
     into a custom or auto-generated short URL.`,
      features: [
        "Creates randomly generated short URLs",
        "Creates custom short URLs (available for registered users)",
        "Session-based authentication system",
        "Fully responsive design across all devices",
        " Personal dashboard where users can view and manage their saved short URLs",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: expressLogo, name: "ExpressJS" },
        { logo: scssLogo, name: "SCSS" },
        { logo: postgreLogo, name: "Postgres" },
        { logo: prismaLogo, name: "Prisma" },
        { logo: primeReactLogo, name: "PrimeReact" },
        { logo: passportJSLogo, name: "Passport.js" },
      ],
      imageAtLeft: true,
    },
    
    {
      id: "2",
      title: "Calculator",
      description: `A responsive, basic calculator app capable of handling arithmetic and multiplication operations, created as part of my web development learning journey.`,
      features: [
        "Handles arithmetic and multiplications operations",
        "Handles special cases",
        "Fully responsive design across all devices",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: cssLogo, name: "CSS" },
        { logo: regexLogo, name: "Regex" },
      ],
      imageAtLeft: false,
    },

    {
      id: "3",
      title: "Drum Machine",
      description: `A responsive drum machine app that allows users to play beats, created to strengthen my web development skills.`,
      features: [
        "Switch between two different sound sets.",
        "Adjustable volume control for all sounds.",
        "Play beats using either the keyboard or mouse.",
        "Displays the name of the sound currently triggered.",
        "Fully responsive design for all screen sizes",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: bootstrapLogo, name: "bootstrap" },
      ],
      imageAtLeft: true,
    },

    {
      id: "4",
      title: "Markdown Previewer",
      description: `A responsive Markdown previewer that converts Markdown code into formatted content, with support for advanced and special-case syntax.`,
      features: [
        "Conversion of Markdown input into formatted preview.",
        "Supports standard Markdown elements such as headings, lists, links, images, and code blocks.",
        "Handles special-case Markdown syntax for more complex formatting.",
        "Clean and responsive interface optimized for all screen sizes.",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: bootstrapLogo, name: "bootstrap" },
        { logo: regexLogo, name: "Regex" },
      ],
      imageAtLeft: false,
    },
    {
      id: "5",
      title: "Session & Break Timer",
      description: `A customizable session–break timer that lets users set their own work and rest durations, automatically alternating between phases with visual and audio cues for better time management.`,
      features: [
        "Adjustable session length and break length.",
        "Automatically alternates between session and break phases.",
        "Emits a five-beep alarm when switching phases to prepare the user in advance.",
        "Responsive accros all devices.",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: cssLogo, name: "CSS" },
      ],
      imageAtLeft: true,
    },

    {
      id: "6",
      title: "Quote Generator",
      description: `A dynamic quote generator that displays random inspirational quotes at the click of a button`,
      features: [
        "Generates a new random quote on demand.",
        "Displays both the quote text and its author.",
        "Smooth transitions for a good user experience.",
        "Share quotes directly to Tumblr or X.",
        "Responsive accros all devices.",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: bootstrapLogo, name: "bootstrap" },
      ],
      imageAtLeft: false,
    },

    {
      id: "7",
      title: "Pokemon Search",
      description: `A Pokémon search app that lets users look up any Pokémon by name or ID, instantly displaying its image, type, and full set of stats`,
      features: [
        "Search Pokémon by name or ID.",
        "Displays Pokémon image, name, and elemental type (Fire, Electric, Water, etc.).",
        "Shows complete stat details including attack, defense, speed, and more.",
        "Responsive accros all devices.",
      ],
      techs: [
        { logo: javascriptLogo, name: "Javascript" },
        { logo: cssLogo, name: "CSS" },
        { logo: htmlLogo, name: "HTML" },
      ],
      imageAtLeft: true,
    },
    {
      id: "8",
      title: "Exercise Tracker",
      description: `A full-stack app where you can add users, log their exercises, and view a complete history of their activity. The app provides an organized user dashboard with CRUD functionality for managing users and their activity.`,
      features: [
        "Add new users with unique IDs.",
        "Log detailed exercise entries (name, duration, date, etc.) for each user.",
        "View a user’s full exercise history on their dedicated page.",
        "Delete users and automatically remove their associated data.",
        "Home page displays all users in a clean, sortable table.",
        "Responsive UI for smooth use on all devices.",
      ],
      techs: [
        { logo: reactLogo, name: "React" },
        { logo: expressLogo, name: "ExpressJS" },
        { logo: primeReactLogo, name: "PrimeReact" },
        { logo: postgreLogo, name: "Postgres" },
        { logo: scssLogo, name: "SCSS" },
      ],
      imageAtLeft: false,
    },
  ];


  // const showMore = () => {

  //   for(let i=0;i<=2; i++){
  //     if(visible.length < projects.length){
  //       setVisible([...visible, true])
  //     }
  //   }

  // }

  const showMore = () => {
  setVisible(prev => [
    ...prev,
    ...new Array(2).fill(true).slice(0, projects.length - prev.length)
  ]);
};

  return (
    <div className="projects-light">
      <div className="projects-title">
        <div className="title">Projects</div>
        <div className="subtitle">
          Some projects that I have accomplished so far
        </div>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            techs={project.techs}
            imageAtLeft={project.imageAtLeft}
            isVisible={visible[index]}
          />
        ))
        
        }
        { !(projects.length === visible.length) && 
      //   <Button
      //   className="button"
      //   label="See more"
      //   icon="pi pi-arrow-down"
      //   iconPos="right"
      //   onClick={showMore}
      //   text
      // 
      <div className="seeMore">
      <Button  label="Show more projects" severity="info" text icon="pi pi-arrow-down" iconPos="right" onClick={showMore} />
      {/* <Button label="See more" severity="help" raised /> */}
      </div>
      }
      </div>
    </div>
  );
}
export default Projects;

// function Project({ id, title, description, features, techs, imageAtLeft, isVisible }) {
//   return (
//     <div
//       className={`${imageAtLeft ? `${ !isVisible ? "d-none project-description-image" : "project-description-image"}` : `${ !isVisible ? "d-none project-description-image-reverse" : "project-description-image-reverse"}`}`}
//     >
//       <div className="project-image">
//         <Image className={`ShortURL-image${id}`} />{" "}
//       </div>
//       <div
//         className={`${imageAtLeft ? "project-description" : "project-description-left"}`}
//       >
//         <div className="project-name">
//           <span className="projectNumber">
//             {id}.{"  "}
//           </span>
//           {title}
//         </div>
//         <br />
//         <br />

//         <p className="description-text">{description}</p>

//         <div className="project-image-small">
//           <Image className={`ShortURL-image${id}`} />{" "}
//         </div>

//         <div className="features">
//           <i className="pi pi-list"></i> Features:
//         </div>

//         <ul className="features-list">
//           {features.map((feature, index) => (
//             <li key={index}>{feature} </li>
//           ))}
//         </ul>

//         <div className="Tech">
//           <i className="pi pi-cog"></i>Tech used:
//         </div>

//         <div className="techs">
//           {techs.map((tech,index) => (
//             <div className="tech" key={index}>
//               <img src={tech.logo} className="tech-image" />
//               <p className="tech-title">{tech.name}</p>
//             </div>
//           ))}
//         </div>

//         <div className="readMore">
//           <Button
//             label="Show demo"
//             icon="pi pi-external-link"
//             iconPos="right"
//             className="demo"
//           />
//           <Button
//             label="Read more"
//             icon="pi pi-github"
//             iconPos="right"
//             className="github"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// function Project({ id, title, description, features, techs, imageAtLeft, isVisible }) {
//   const ref = useRef(null);

  
//   const inView = useInView(ref, { once: true, margin: "-100px" });

  
//   const descDistance = 200; 
//   const descDuration = 0.7; 
//   const imageDelay = descDuration + 0.15; 

  
//   const descriptionInitial = imageAtLeft
//     ? { opacity: 0, x: -descDistance } 
//     : { opacity: 0, x: descDistance }; 

//   const descriptionAnimate = inView ? { opacity: 1, x: 0 } : descriptionInitial;

  
//   const imageInitial = { opacity: 0, scale: 0.97 };
//   const imageAnimate = inView ? { opacity: 1, scale: 1 } : imageInitial;

  
//   const containerClass = imageAtLeft
//     ? !isVisible
//       ? "d-none project-description-image"
//       : "project-description-image"
//     : !isVisible
//     ? "d-none project-description-image-reverse"
//     : "project-description-image-reverse";

//   return (
//     <div ref={ref} className={containerClass}>
      
//       <motion.div
//         className="project-image"
//         initial={imageInitial}
//         animate={imageAnimate}
//         transition={{ duration: 0.6, delay: imageDelay, ease: "easeOut" }}
//         aria-hidden={!inView} 
//         style={{ pointerEvents: inView ? "auto" : "none" }}
//       >
//         <Image className={`ShortURL-image${id}`} />
//       </motion.div>

      
//       <motion.div
//         className={imageAtLeft ? "project-description" : "project-description-left"}
//         initial={descriptionInitial}
//         animate={descriptionAnimate}
//         transition={{ duration: descDuration, ease: "easeOut" }}
//       >
//         <div className="project-name">
//           <span className="projectNumber">{id}.{"  "}</span>
//           {title}
//         </div>
//         <br />
//         <br />

//         <p className="description-text">{description}</p>

//         <div className="project-image-small">
//           <Image className={`ShortURL-image${id}`} />
//         </div>

//         <div className="features">
//           <i className="pi pi-list"></i> Features:
//         </div>

//         <ul className="features-list">
//           {features.map((feature, idx) => (
//             <li key={idx}>{feature}</li>
//           ))}
//         </ul>

//         <div className="Tech">
//           <i className="pi pi-cog"></i>Tech used:
//         </div>

//         <div className="techs">
//           {techs.map((tech, index) => (
//             <div className="tech" key={index}>
//               <img src={tech.logo} className="tech-image" alt={tech.name} />
//               <p className="tech-title">{tech.name}</p>
//             </div>
//           ))}
//         </div>

//         <div className="readMore">
//           <Button label="Show demo" icon="pi pi-external-link" iconPos="right" className="demo" />
//           <Button label="Read more" icon="pi pi-github" iconPos="right" className="github" />
//         </div>
//       </motion.div>
//     </div>
//   );
// }


function Project({ id, title, description, features, techs, imageAtLeft, isVisible }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth <= 960;

  
  const descDistance = 200; 
  const descDuration = 0.7;
  const imageDelay = descDuration + 0.15;

  
  const descriptionInitial = isSmallScreen
    ? { opacity: 0 } 
    : imageAtLeft
      ? { opacity: 0, x: -descDistance } 
      : { opacity: 0, x: descDistance }; 

  const descriptionAnimate = { opacity: 1, x: 0 };

  const descriptionTransition = {
    duration: isSmallScreen ? 1.5 : descDuration,
    ease: "easeOut",
  };

  
  const imageInitial = isSmallScreen
    ? { opacity: 0 } 
    : { opacity: 0, scale: 0.97 };

  const imageAnimate = isSmallScreen
    ? { opacity: 1 } 
    : { opacity: 1, scale: 1 };

  const imageTransition = {
    duration: 0.6,
    delay: isSmallScreen ? 0 : imageDelay,
    ease: "easeOut",
  };

  
  const containerClass = imageAtLeft
    ? !isVisible
      ? "d-none project-description-image"
      : "project-description-image"
    : !isVisible
    ? "d-none project-description-image-reverse"
    : "project-description-image-reverse";

  return (
    <div ref={ref} className={containerClass}>
      
      
      <motion.div
        className="project-image"
        initial={imageInitial}
        animate={inView ? imageAnimate : imageInitial}
        transition={imageTransition}
        aria-hidden={!inView}
        style={{ pointerEvents: inView ? "auto" : "none" }}
      >
        <Image className={`ShortURL-image${id}`} />
      </motion.div>

     
      <motion.div
        className={imageAtLeft ? "project-description" : "project-description-left"}
        initial={descriptionInitial}
        animate={inView ? descriptionAnimate : descriptionInitial}
        transition={descriptionTransition}
      >
        <div className="project-name">
          <span className="projectNumber">{id}.{"  "}</span>
          {title}
        </div>

        <br /><br />

        <p className="description-text">{description}</p>
        
        <div className="project-image-small">
          <Image className={`ShortURL-image${id}`} />
        </div>

        <div className="features">
          <i className="pi pi-list"></i> Features:
        </div>

        <ul className="features-list">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <div className="Tech">
          <i className="pi pi-cog"></i>Tech used:
        </div>

        <div className="techs">
          {techs.map((tech, index) => (
            <div className="tech" key={index}>
              <img src={tech.logo} className="tech-image" alt={tech.name} />
              <p className="tech-title">{tech.name}</p>
            </div>
          ))}
        </div>

        <div className="readMore">
          <Button label="Show demo" icon="pi pi-external-link" iconPos="right" className="demo" />
          <Button label="Read more" icon="pi pi-github" iconPos="right" className="github" />
        </div>
      </motion.div>
    </div>
  );
}

