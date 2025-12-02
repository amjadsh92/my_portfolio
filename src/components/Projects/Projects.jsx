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
import { Image } from "primereact/image";
import { Button } from "primereact/button";

function Projects({ isDarkMode }) {
  return (
    <div className="projects-light">
      <div className="projects-title">
        <div className="title">Projects</div>
        <div className="subtitle">Some projects that I have accomplished so far</div>
      </div>
      <div className="projects-container">
        <div className="project-description-image">
          <div className="project-image">
            <Image className="shortURL-image" />{" "}
          </div>
          <div className="project-description">
            <div className="project-name">
              {/* <span className="projectNumber">1.{'  '}</span> */}
              URL Shortener
            </div>
            <br />
            <br />

            <p className="description-text">
              Full-Stack React app that transforms a long URL into a custom or
              auto-generated short URL.
            </p>

            <div className="features">
              <i className="pi pi-list"></i> Features:
            </div>

            <ul className="features-list">
              <li>Creates randomly generated short URLs</li>
              <li>
                Creates custom short URLs (available for registered users)
              </li>
              <li>Session-based authentication system</li>
              <li>Fully responsive design across all devices</li>
              <li>
                Personal dashboard where users can view and manage their saved
                short URLs
              </li>
            </ul>

            <div className="Tech">
              <i className="pi pi-cog"></i>Tech used:
            </div>

            <div className="techs">
              <div className="tech">
                <img src={reactLogo} className="tech-image" />
                <p className="tech-title">React</p>
              </div>
              <div className="tech">
                <img src={expressLogo} className="tech-image" />
                <p className="tech-title">ExpressJS</p>
              </div>
              <div className="tech">
                <img src={scssLogo} className="tech-image" />
                <p className="tech-title">SCSS</p>
              </div>
              <div className="tech">
                <img src={postgreLogo} className="tech-image" />
                <p className="tech-title">Postgres</p>
              </div>
              <div className="tech">
                <img src={prismaLogo} className="tech-image" />
                <p className="tech-title">Prisma</p>
              </div>
              <div className="tech">
                <img src={primeReactLogo} className="tech-image" />
                <p className="tech-title">PrimeReact</p>
              </div>
              <div className="tech">
                <img src={passportJSLogo} className="tech-image" />
                <p className="tech-title">Passport.js</p>
              </div>
            </div>

            <div className="readMore">
              <Button
                label="Show demo"
                icon="pi pi-external-link"
                iconPos="right"
                className="demo"
              />
              <Button
                label="Read more"
                icon="pi pi-github"
                iconPos="right"
                className="github"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
