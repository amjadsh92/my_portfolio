/* eslint-disable */
import "./footer.scss";

function Footer({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? "footer-dark" : "footer-light"}`}>
      <div className="footer-text">
        <div className="footer-rights">
          &copy; {new Date().getFullYear()},&nbsp;
          <span className="footer-name">Amjad Sharafeddine</span>. All rights
          reserved.
        </div>
        <div className="footer-follow">
          Follow me on &nbsp;
          <a
            href="https://github.com/amjadsh92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-github github"></i>
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/amjad-sharafeddine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-linkedin linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
