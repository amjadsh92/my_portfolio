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

  const projects = [
    {id:"1",
     title:"URL Shortener",
     description:`Full-Stack React app that transforms a long URL 
     into a custom or auto-generated short URL.`,
     features:["Creates randomly generated short URLs",
               "Creates custom short URLs (available for registered users)",
               "Session-based authentication system",
               "Fully responsive design across all devices",
               " Personal dashboard where users can view and manage their saved short URLs"
              ],
     techs: [{logo:reactLogo, name:"React"},
            {logo:expressLogo, name:"ExpressJS"},
            {logo:scssLogo, name:"SCSS"},
            {logo:postgreLogo, name:"Postgres"},
            {logo:prismaLogo, name:"Prisma"},
            {logo:primeReactLogo, name:"PrimeReact"},
            {logo:passportJSLogo, name:"Passport.js"}
            
    ]         

    },

    {id:"1",
     title:"URL Shortener",
     description:`Full-Stack React app that transforms a long URL 
     into a custom or auto-generated short URL.`,
     features:["Creates randomly generated short URLs",
               "Creates custom short URLs (available for registered users)",
               "Session-based authentication system",
               "Fully responsive design across all devices",
               " Personal dashboard where users can view and manage their saved short URLs"
              ],
     techs: [{logo:reactLogo, name:"React"},
            {logo:expressLogo, name:"ExpressJS"},
            {logo:scssLogo, name:"SCSS"},
            {logo:postgreLogo, name:"Postgres"},
            {logo:prismaLogo, name:"Prisma"},
            {logo:primeReactLogo, name:"PrimeReact"},
            {logo:passportJSLogo, name:"Passport.js"}
            
    ]         

    }
  ] 


 

  return (
    <div className="projects-light">
      <div className="projects-title">
        <div className="title">Projects</div>
        <div className="subtitle">Some projects that I have accomplished so far</div>
      </div>
      <div className="projects-container">
        { projects.map((project) => <Project id={project.id} title={project.title} description={project.description} features={project.features} techs={project.techs} />  )}
        {/* <div className="project-description-image">
          <div className="project-image">
            <Image className="shortURL-image" />{" "}
          </div>
          <div className="project-description">
            <div className="project-name">
              <span className="projectNumber">1.{'  '}</span>
              URL Shortener
            </div>
            <br />
            <br />

            <p className="description-text">
              Full-Stack React app that transforms a long URL into a custom or
              auto-generated short URL.
            </p>

            <div className="project-image-small">
            <Image className="shortURL-image" />{" "}
            </div>

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
        </div> */}
      </div>
    </div>
  );
}
export default Projects;


function Project({id,title, description, features,techs}){

  return(


     <div className="project-description-image">
          <div className="project-image">
            <Image className={`ShortURL-image${id}`} />{" "}
          </div>
          <div className="project-description">
            <div className="project-name">
              <span className="projectNumber">{id}.{'  '}</span>
              {title}
            </div>
            <br />
            <br />

            <p className="description-text">
              {description}
            </p>

            <div className="project-image-small">
            <Image className={`ShortURL-image${id}`} />{" "}
            </div>

            <div className="features">
              <i className="pi pi-list"></i> Features:
            </div>

            <ul className="features-list">
              {/* <li>Creates randomly generated short URLs</li>
              <li>
                Creates custom short URLs (available for registered users)
              </li>
              <li>Session-based authentication system</li>
              <li>Fully responsive design across all devices</li>
              <li>
                Personal dashboard where users can view and manage their saved
                short URLs
              </li> */}
              {features.map((feature) => (<li>{feature} </li>))}
            </ul>

            <div className="Tech">
              <i className="pi pi-cog"></i>Tech used:
            </div>

            <div className="techs">
              {/* <div className="tech">
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
              </div> */}
             {techs.map((tech) => 
             
              
                (<div className="tech">
                <img src={tech.logo} className="tech-image" />
                <p className="tech-title">{tech.name}</p>
              </div>)
              
            )}

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




  )


}