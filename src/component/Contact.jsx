import "./css/contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      
      {/* LEFT IMAGE */}
      <div className="contact-left">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/9068/9068670.png" 
          alt="contact" 
        />
      </div>

      {/* RIGHT FORM */}
      <div className="contact-right">
        <h2>Talk to Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">Send message</button>
        </form>
      </div>

    </div>
  );
}