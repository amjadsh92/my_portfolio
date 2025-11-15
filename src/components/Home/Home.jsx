/* eslint-disable */
import "./Home.scss";
import { Button } from "primereact/button";
import { PrimeReactContext } from "primereact/api";
import { useContext } from "react";
import { useEffect, useState, useRef } from "react";
import { Image } from "primereact/image";
import { motion } from "motion/react"
import { useInView } from "motion/react";

function Home({ isDarkMode }) {
  const isTablet = window.innerWidth < 960 && window.innerWidth > 615 ;
  const isMobile = window.innerWidth < 615;
  // const isLargeScreen = window.innerWidth > 960;
  const [isMoved, setIsMoved] = useState(false);
  const [paragraphIsMoved, setParagraphIsMoved] = useState(false);
  const [buttonSectionMoved, setButtonSectionMoved] = useState(false);
  const [buttonMoved, setButtonMoved] = useState(false);
  const [smallImageMoved, setSmallImageMoved] = useState(false);
  const [midImageMoved, setMidImageMoved] = useState(false)
  const [imageMoved, setImageMoved] = useState(false);

  useEffect(() => {
    setIsMoved(true);
    setTimeout(() => setParagraphIsMoved(true), 500);

    setTimeout(() => setButtonSectionMoved(true), 800);

    setTimeout(() => setButtonMoved(true), 800);

    setTimeout(() => setSmallImageMoved(true), 800);
    setTimeout(() => setMidImageMoved(true), 800);

    setImageMoved(true);
  }, []);

  return (
    <div className={`${isDarkMode ? "home-dark" : "home-light"} `}>
      
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
            proficient in <span className="react">React</span> and <span className="express"> ExpressJS.</span>{" "}
          </div>

          <div className={`home-mid-image  ${midImageMoved ? "moved" : ""}`}></div>

          <div
            className={`button-section ${buttonSectionMoved ? "moved" : ""}`}
          >
            <MyButton buttonMoved={buttonMoved} isTablet={isTablet} isMobile={isMobile} />
            <div
              className={`home-small-image ${smallImageMoved ? "moved" : ""}`}
            ></div>
          </div>
        </div>
        <div className="home-image">
          <Image className={`home-developer ${imageMoved ? "moved" : ""}`} />
        </div>
      
    </div>
  );
}

export default Home;

// function MyButton({ buttonMoved }) {
//   const PrimeReact = useContext(PrimeReactContext);
//   PrimeReact.ripple = true;

//   return (
//     <Button
//       className={`button ${buttonMoved ? "moved" : ""}`}
//       label="View my work"
//       icon="pi pi-arrow-down"
//       iconPos="right"
//     />
//   );
// }


// function MyButton({ buttonMoved, isTablet,isMobile }) {
//   const PrimeReact = useContext(PrimeReactContext);
//   PrimeReact.ripple = true;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: isTablet ? -30 : 0, y: isTablet ? 0 : 30 }}
//       whileInView={{ opacity: 1, x: 0,  y: 0  }}
//       viewport={{ once: true, amount: 0.3 }} 
//       transition={{ duration: 0.6, ease: "easeOut", delay: isMobile ? 0: 1}}
//       // whileHover={{ scale: 1.05 }}
//       // whileTap={{ scale: 0.95 }}
//       className={`button ${buttonMoved ? "moved" : ""}`}
//     >
//       <Button
//         className="button"
//         label="View my work"
//         icon="pi pi-arrow-down"
//         iconPos="right"
//       />
//     </motion.div>
//   );
// }


function MyButton({isTablet}) {
  const PrimeReact = useContext(PrimeReactContext);
  PrimeReact.ripple = true;

  const ref = useRef(null);


  const isInView = useInView(ref, { once: true });

  
  const [appearedImmediately, setAppearedImmediately] = useState(false);

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
      initial={{opacity:0, x: isTablet ? -30 : 0, y: isTablet ? 0 : 30}}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : {} 
      }
      transition={{
        duration: 0.8,
        ease: "easeOut",
      
        delay: appearedImmediately ? 0.6 : 0,
      }}
    >
      <Button
        className="button"
        label="View my work"
        icon="pi pi-arrow-down"
        iconPos="right"
      />
    </motion.div>
  );
}

// /* eslint-disable */
// import "./Home.scss";
// import { Button } from "primereact/button";
// import { PrimeReactContext } from "primereact/api";
// import { useContext } from "react";
// import { Image } from "primereact/image";
// import { motion } from "motion/react"

// function Home({ isDarkMode }) {
//   const fadeFromLeft = {
//     hidden: { opacity: 0, x: -50 },
//     show: { opacity: 1, x: 0 }
//   };

//   const fadeFromRight = {
//     hidden: { opacity: 0, x: 50 },
//     show: { opacity: 1, x: 0 }
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0 }
//   };

//   const fadeDown = {
//     hidden: { opacity: 0, y: -40 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className={`${isDarkMode ? "home-dark" : "home-light"} `}>

//       <div className="home-description">

//         {/* TITLE */}
//         <motion.div
//           className="home-title"
//           variants={fadeFromLeft}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.9 }}
//         >
//           Hello, I am <span className="home-name">Amjad</span>.
//         </motion.div>

//         {/* SUBTITLE */}
//         <motion.div
//           className="home-subtitle"
//           variants={fadeFromRight}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, delay: 0.2 }}
//         >
//           Full Stack Web Developer
//         </motion.div>

//         {/* PARAGRAPH */}
//         <motion.div
//           className="home-paragraph"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           I am a full stack web developer with a background in physics. I am
//           proficient in <span className="react">React</span> and <span className="express">ExpressJS</span>.
//         </motion.div>

//         {/* MID IMAGE (tablet breakpoint) */}
//         <motion.div
//           className="home-mid-image"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         ></motion.div>

//         {/* BUTTON SECTION */}
//         <motion.div
//           className="button-section"
//           variants={fadeDown}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <AnimatedButton />
          
//           {/* SMALL IMAGE (mobile) */}
//           <motion.div
//             className="home-small-image"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           ></motion.div>
//         </motion.div>

//       </div>

//       {/* MAIN DESKTOP IMAGE */}
//       <motion.div
//         className="home-image"
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         <Image className="home-developer" />
//       </motion.div>

//     </div>
//   );
// }


// function AnimatedButton() {
//   const PrimeReact = useContext(PrimeReactContext);
//   PrimeReact.ripple = true;

//   return (
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         show: { opacity: 1, y: 0 }
//       }}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//     >
//       <Button
//         className="button"
//         label="View my work"
//         icon="pi pi-arrow-down"
//         iconPos="right"
//       />
//     </motion.div>
//   );
// }

// export default Home;