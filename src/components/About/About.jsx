/* eslint-disable */
import "./About.scss";
import htmlLogo from "../../assets/images/html2.png";
import javascriptLogo from "../../assets/images/javascript.png";
import cssLogo from "../../assets/images/css.png";
import reactLogo from "../../assets/images/react.png";
import expressLogo from "../../assets/images/express.png";
import scssLogo from "../../assets/images/scss.png";
import gitLogo from "../../assets/images/git.png";
import postgreLogo from "../../assets/images/postgre3.png";
import prismaLogo from "../../assets/images/prismaORM.png";
import primeReactLogo from "../../assets/images/primereact.png";

function About({ isDarkMode }) {
  return (
    <div className="about-light">
      <div className="header">
        <div className="avatar">
          <div className="avatar-border">
            <div className="avatar-image"></div>
          </div>
        </div>
        <div className="text">
          <p className="text-title">About</p>
          <p className="text-description">
            With a background in physics, I’ve always been drawn to deep
            thinking and problem-solving. Over time, I discovered that software
            engineering perfectly combines these interests.
            <br /> <br />
            Through bootcamps like freeCodeCamp and by connecting with
            experienced developers, I’ve self-taught my way through the full web
            development stack — from front-end development to back-end
            development and deployment.
            <br /> <br />
            I’ve built several front-end and full-stack projects, and I’m now
            eager to bring my skills, curiosity, and persistence into a
            professional software engineering environment.
          </p>
        </div>
      </div>
      
        <div className="midavatar">

            <div className="avatar-border">
            <div className="avatar-image"></div>
          </div>


        </div>
        <div className="skills">
          <div className="skill">
            <img src={htmlLogo} className="html" />
            <p className="skill-title">HTML</p>
          </div>

          <div className="skill">
            <img src={javascriptLogo} className="html" />
            <p className="skill-title">JAVASCRIPT</p>
          </div>
          <div className="skill">
            <img src={cssLogo} className="html" />
            <p className="skill-title">CSS</p>
          </div>
          <div className="skill">
            <img src={reactLogo} className="html" />
            <p className="skill-title">REACT</p>
          </div>
          <div className="skill">
            <img src={expressLogo} className="html" />
            <p className="skill-title">EXPRESS.JS</p>
          </div>
          <div className="skill">
            <img src={scssLogo} className="html" />
            <p className="skill-title">SCSS</p>
          </div>
          <div className="skill">
            <img src={gitLogo} className="html" />
            <p className="skill-title">GIT</p>
          </div>
          <div className="skill">
            <img src={postgreLogo} className="html" />
            <p className="skill-title">POSTGRES</p>
          </div>
          <div className="skill">
            <img src={prismaLogo} className="html" />
            <p className="skill-title">PRISMA</p>
          </div>
          <div className="skill">
            <img src={primeReactLogo} className="html" />
            <p className="skill-title">PRIME REACT</p>
          </div>
        </div>
      </div>
    
  );
}

export default About;
