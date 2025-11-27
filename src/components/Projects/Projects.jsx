/* eslint-disable */
import "./Projects.scss";
import shortUrlImg from "../../assets/images/urlshortener-image.png";
import reactLogo from "../../assets/images/react.png";
import expressLogo from "../../assets/images/express.png";
import scssLogo from "../../assets/images/scss.png";
import postgreLogo from "../../assets/images/postgre3.png";
import prismaLogo from "../../assets/images/prismaORM.png";
import primeReactLogo from "../../assets/images/primereact.png";
import { Image } from "primereact/image";
import { Button } from 'primereact/button';

function Projects({ isDarkMode }) {
 

  return (
    <div className="projects-light">
       <div className="projects-title">
         <div className="title">projects</div>
       </div>
       <div className="projects-container">
       
       <div className="project-description-image">
       <div className="project-image"><Image  className="shortURL-image" /> </div>
       <div className="project-description">
        <div className="project-name">URL Shortener</div>
        <br/><br/>
        {/* <p className="description-text">Full Stack React app that transforms a long URL into a custom or auto-generated short URLs<br/><br/>

        Features: <br/><br/>
        ability to create auto-generated <br />
        ability to create custom short URLs (for registered users)<br />
        Session-based authentication <br />
        Fully responsive <br />


<br/><br/>

</p> */}

<p className="description-text">
  Full Stack React app that transforms a long URL into a custom or auto-generated short URL.
</p>

<span className="features">Features:</span><br />

<ul className="features-list">
  <li>Ability to create auto-generated short URLs</li>
  <li>Ability to create custom short URLs (for registered users)</li>
  <li>Session-based authentication</li>
  <li>Fully responsive</li>
</ul>

<span className="Tech">Tech used:</span><br />

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

   
</div>
{/* <span className="Tech"> More Details:</span><br /> */}
<div className="readMore">
{/* <i className="pi pi-github github" ></i>
<i className="pi pi-external-link demo" ></i> */}
 {/* <Button icon="pi pi-github" className="github"  />  */}
 {/* <i className="pi pi-github github" ></i> */}
 {/* <Button icon="pi pi-github" className="github"  />
 <Button icon="pi pi-external-link" className="demo" />  */}
  {/* <i className="pi pi-github github" ></i>
  <i className="pi pi-external-link demo" ></i> */}
  <Button
        
        label="Show Demo"
        icon="pi pi-external-link"
        iconPos="right"
        
      />
   {/* <Button
        
        label="Show source code"
        icon="pi pi-github"
        iconPos="right"
        
      />     */}
</div>


 
</div>
      </div> 
       </div>
      
      
    </div>)
}
export default Projects