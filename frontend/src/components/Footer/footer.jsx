/* eslint-disable */
import "./footer.scss";


function Footer({ isDarkMode }) {
   

    return(
     <div className={`${isDarkMode ? "footer-dark" : "footer-light"}`}>
        <div className="footer-text">
        <div className="footer-rights">&copy; 2026,&nbsp;<span className="footer-name">Amjad Sharafeddine</span>.{" "}All rights reserved.</div>
        <div className="footer-follow">Follow me on &nbsp; <i className="pi pi-github github" ></i> &nbsp;<i className="pi pi-linkedin linkedin" ></i> 
        
        </div>
      </div>
     </div>

    )
    
  ;
}

export default Footer;

