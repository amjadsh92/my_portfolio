/* eslint-disable */
import "./Home.scss";
import { Button } from "primereact/button";
import { PrimeReactContext } from "primereact/api";
import { useContext } from "react";
import { Image } from "primereact/image";

function Home({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? "home-dark" : "home-light"} `}>
      <div className="home-content">
        <div className="home-description">
          <div className="home-title">
            Hello, I am <span className="home-name">Amjad</span>.{" "}
          </div>
          <div className="home-subtitle">Full Stack Web Developer</div>
          <div className="home-paragraph">
            {" "}
            I am a full stack web developer with a background in physics. I am
            proficient in React and ExpressJS.{" "}
          </div>

          <div className="home-mid-image"></div>
          {/* <Button label="Primary" className="" /> */}
          <div className="button-section">
             <MyButton />
            <div className="home-small-image"></div>
          </div>
         
          {/* <div className="test"></div> */}
        </div>
        <div className="home-image">
          {/* <div className="badges">
            <Image className="home-react" />
            <Image className="home-express" />
            <Image className="home-postgres" />
          </div> */}
          <Image className="home-developer" />
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
