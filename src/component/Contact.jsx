import { Link } from "react-router-dom";
import "./css/contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      
      {/* LEFT IMAGE */}
      <div className="contact-card">

<div className="map-container contact-left">
  <iframe
    src="https://www.google.com/maps?q=Kathmandu&output=embed"
    
    
    allowFullScreen=""
    loading="lazy"
    ></iframe>
</div>

      {/* RIGHT FORM */}
      <div className="contact-right">
        <h2>Dont Miss out the opportunity,<br/> </h2>
        <p> Fill out the inquiry form </p>
        <p id="smallp">We will be contacting you shortly. </p>

        <div className="link-container">

        <Link to={'/inquiry'}>Inquiry</Link>
        </div>
      </div>

    </div>
    </div>
  );
}