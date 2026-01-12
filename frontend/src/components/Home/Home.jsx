/* eslint-disable */
import "./Home.scss";
import { Button } from "primereact/button";
import { PrimeReactContext } from "primereact/api";
import { useContext } from "react";
import { useEffect, useState, useRef } from "react";
import { Image } from "primereact/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";


function Home({ isDarkMode, projectsRef }) {
  const isTablet = window.innerWidth < 960 && window.innerWidth > 615;
  const isMobile = window.innerWidth < 615
  const [isMoved, setIsMoved] = useState(false);
  const [paragraphIsMoved, setParagraphIsMoved] = useState(false);
  const [smallImageMoved, setSmallImageMoved] = useState(false);
  const [midImageMoved, setMidImageMoved] = useState(false);
  
  
  useEffect(() => {
    setIsMoved(true);
    setTimeout(() => setParagraphIsMoved(true), 1000);
    setTimeout(() => setSmallImageMoved(true), 1800);
    setTimeout(() => setMidImageMoved(true), 1800);

    
  }, []);

  return (
    <div id="home" className={`${isDarkMode ? "home-dark" : "home-light"} `}>
      <div className="home-description">
        <div className={`home-title ${isMoved ? "moved" : ""}`}>
          Hello, I am <span className="home-name">Amjad</span>.{" "}
        </div>
        <div className={`home-subtitle ${isMoved ? "moved" : ""}`}>
          Full Stack Web Developer
        </div>
        <div className={`home-paragraph ${paragraphIsMoved ? "moved" : ""}`}>
          {" "}
          I am a full stack web developer with a background in physics. I am
          proficient in <span className="react">React</span> and{" "}
          <span className="express"> ExpressJS.</span>{" "}
        </div>

        <div
          className={`home-mid-image  ${midImageMoved ? "moved" : ""}`}
        ></div>

        
         <div className={`button-section`}>
          <MyButton
            isMobile={isMobile}
            isTablet={isTablet}
            projectsRef={projectsRef}
          />
          <div
            className={`home-small-image ${smallImageMoved ? "moved" : ""}`}
          ></div>
        </div>
      </div>
      <motion.div
             
        initial={{ opacity: 0, x:  0, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: !(isTablet || isMobile) ? 1.6 : 0.8,
          ease: "easeOut",
          delay: 2,
        }} 
       >
      <div className="home-image">
       
        <Image className={`home-developer`} />
      </div>
     </motion.div>  
    </div>
  );
}

export default Home;

function MyButton({ isTablet, isMobile, projectsRef }) {
  const PrimeReact = useContext(PrimeReactContext);
  PrimeReact.ripple = true;

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const [appearedImmediately, setAppearedImmediately] = useState(false);

  const scrollIntoProjects = () =>{

     projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    const isVisibleOnLoad = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisibleOnLoad) {
      setAppearedImmediately(true);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isTablet ? -30 : 0, y: isTablet ? 0 : 40 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: !(isTablet || isMobile) ? 1.6 : 0.8,
        ease: "easeOut",

        delay: appearedImmediately ? (!(isTablet || isMobile) ? 2 : 1.45) : 0,
      }}
    >
      <Button
        className="button"
        label="View my work"
        icon="pi pi-arrow-down"
        iconPos="right"
        onClick={scrollIntoProjects}
      />
    </motion.div>
  );
}