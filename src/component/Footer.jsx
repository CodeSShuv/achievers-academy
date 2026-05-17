
import "./css/footer.css"; // Make sure to create this CSS file
import logo from "../assets/img/logonobg.png"; // Replace with your actual logo path
import facebook from "../assets/logos/facebook.png"
import instagram from "../assets/logos/social.png"
import tiktok from "../assets/logos/tiktok.png"
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="">Test Preparation</Link>
            </li>
            {/* <li>
              <Link to="#destinations">Destinations</Link>
            </li> */}
            <li>
              <Link to="/inquiry">Inquiry</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <Link to="mailto:info@achieverscareer.com.np">
            info@achievercareer.com.np</Link></p>
          <p>Phone: +977 9709060751</p>
          <p>Tel-Phone: 01-4547097</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="https://www.facebook.com/share/1Kg9eAQbeA/" target="_blank">
              <img src={facebook}alt="Facebook" />
            </Link>
            <Link to="https://www.instagram.com/achievers.career.academy?igsh=YTA5bjllY3U5Y2Zh"
            target="_blank">
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link to="https://www.tiktok.com/@achievers.career.academy?_r=1&_t=ZS-96EmG0RfFcu"
            target="_blank">
              <img  src={tiktok} alt="Tiktok" />
            </Link>
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