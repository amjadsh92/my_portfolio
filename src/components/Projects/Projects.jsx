/* eslint-disable */
import "./Projects.scss";
import shortUrlImg from "../../assets/images/urlshortener-image.png";

function Projects({ isDarkMode }) {
 

  return (
    <div className="projects-light">
       <div className="projects-title">
         <div className="title">projects</div>
       </div>
       <div className="projects-container">
       
       <div className="project-description-image">
       <div className="project-image"><img src= {shortUrlImg} className="shortURL-image" /> </div>
       <div className="project-description">
        <div className="project-name">URL Shortener</div>
        <br/><br/>
        <p className="description-text">Family owned online business designed for one of my clients to sell CBD products in the Amsterdam market. The website provides an appealing and user-friendly interface for customers who seek the benefits of CBD products.<br/><br/>

It ensures that purchasing legalized CBD products is just a click away, catering to customers in both Japan and Amsterdam.<br/><br/>

With a focus on aesthetics and usability, the website offers an engaging experience for users, making it easy for them to find and purchase the products they need.</p>


 
</div>
      </div> 
       </div>
      
      
    </div>)
}
export default Projects