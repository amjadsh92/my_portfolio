/* eslint-disable */
import "./Home.scss";
import { Button } from "primereact/button";
import { PrimeReactContext } from "primereact/api";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Image } from "primereact/image";

function Home({ isDarkMode }) {

  const [isMoved, setIsMoved] = useState(false)
  const [paragraphIsMoved, setParagraphIsMoved] = useState(false)
  const [buttonMoved, setButtonMoved] = useState(false)
  const [imageMoved, setImageMoved] = useState(false)

  useEffect(() => {
    setIsMoved(true)
    setTimeout(() =>  
      
      setParagraphIsMoved(true),500)

    setTimeout(
      
      () => setButtonMoved(true),800)
      
      setImageMoved(true)
      }, []);


  return (
    <div className={`${isDarkMode ? "home-dark" : "home-light"} `}>
      <div className="home-content">
        <div className="home-description">
          <div className={`home-title ${isMoved ? "moved" : ""}`}>
            Hello, I am <span className="home-name">Amjad</span>.{" "}
          </div>
          <div className={`home-subtitle ${isMoved ? "moved" : ""}`}>Full Stack Web Developer</div>
          <div className={`home-paragraph ${paragraphIsMoved ? "moved" : ""}`}>
            {" "}
            I am a full stack web developer with a background in physics. I am
            proficient in React and ExpressJS.{" "}
          </div>

          <div className="home-mid-image"></div>

          <div className={`button-section ${buttonMoved ? "moved" : ""}`}>
            <MyButton />
            <div className="home-small-image"></div>
          </div>
        </div>
        <div className="home-image">
          <Image className={`home-developer ${imageMoved ? "moved" : ""}`} />
        </div>
      </div>
    </div>
  );
}

export default Home;

function MyButton() {
  const PrimeReact = useContext(PrimeReactContext);
  PrimeReact.ripple = true;

  return (
    <Button label="View my work" icon="pi pi-arrow-down" iconPos="right" />
  );
}
