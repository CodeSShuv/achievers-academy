
import "./css/footer.css"; // Make sure to create this CSS file
import logo from "../assets/img/logonobg.png"; // Replace with your actual logo path
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <div className="footer-logo-container">

          <img src={logo} alt="Achievers Career Academy Logo" />
          </div>
          {/* <h2>Achievers Career Academy</h2>
          <p>
            We are emerging to become a leading consultancy in Nepal, helping
            students achieve their dreams abroad.
          </p> */}
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@achieversacademy.com</p>
          <p>Phone: +977 9812345678</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 Achievers Career Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;