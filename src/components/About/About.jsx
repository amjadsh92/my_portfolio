/* eslint-disable */
import "./About.scss";
import { motion } from "motion/react"

// Logos
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
  const skills = [
    { logo: htmlLogo, title: "HTML" },
    { logo: javascriptLogo, title: "JAVASCRIPT" },
    { logo: cssLogo, title: "CSS" },
    { logo: reactLogo, title: "REACT" },
    { logo: expressLogo, title: "EXPRESS.JS" },
    { logo: scssLogo, title: "SCSS" },
    { logo: gitLogo, title: "GIT" },
    { logo: postgreLogo, title: "POSTGRES" },
    { logo: prismaLogo, title: "PRISMA" },
    { logo: primeReactLogo, title: "PRIME REACT" }
  ];

  
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

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
            Through bootcamps like FreeCodeCamp and by connecting with
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

     
      <motion.div
        className="skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div className="skill" key={i} variants={itemVariants}>
            <img src={skill.logo} className="html" />
            <p className="skill-title">{skill.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;

