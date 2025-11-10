/* eslint-disable */
import "./About.scss"
import htmlLogo from "../../assets/images/html2.png";
import javascriptLogo from "../../assets/images/javascript.png";
import cssLogo from "../../assets/images/css.png";
import reactLogo from "../../assets/images/react.png";
import expressLogo from "../../assets/images/express.png";
import scssLogo from "../../assets/images/scss.png";
import gitLogo from "../../assets/images/git.png";
import postgreLogo from "../../assets/images/postgre3.png";

function About({isDarkMode}){

    return(

        <div className="about-light">
            <div className="header">

                <div className="avatar">
                    <div className="avatar-border">

                        <div className="avatar-image"></div>
                    </div>
                    
                </div>
                <div className="text">
                    
                        <p className="text-title">About</p>
                        <p className="text-description">I am a developer by curiosity with a keen interest in technology. Beside challenging myself, I love learning new technologies and languages.Starting as a full-time software developer, I have a strong foundation in web development and a genuine passion for creating scalable and maintainable solutions. I possess a product-oriented mindset and empathy for customers and have extensive experience working with both front-end and back-end technologies. Throughout my carrear have looked towards automating manual tasks like testing, deployment and monitoring. I am currently working in Amsterdam, Netherlands specializes in full-stack development.</p>


                

               </div>
            </div>
            <div className="skills">
                <div className="skill">
                    <img src={htmlLogo} className="html" />
                    <p className="skill-title">HTML</p>
                     
                </div>
                 <div className="skill">
                    <img src={javascriptLogo} className="html" />
                    <p className="skill-title">Javascript</p>
                    
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


                
                
            </div>            
            
        </div>
    )


}


export default About