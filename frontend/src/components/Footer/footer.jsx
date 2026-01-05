/* eslint-disable */
import "./footer.scss";


function Footer({ isDarkMode }) {
   

    return(
     <div className="footer">
        <div className="footer-text">
        <div className="footer-rights">&copy; 2026,&nbsp;<span className="footer-name">Amjad Sharafeddine</span>.{" "}All rights reserved.</div>
        <div className="footer-follow">Follow me on <i className="pi pi-github github" ></i> <i className="pi pi-linkedin linkedin" ></i> 
        
        </div>
      </div>
     </div>

    )
    
  ;
}

export default Footer;

