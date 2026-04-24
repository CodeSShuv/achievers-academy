import InquiryForm from "./Components/InquiryForm.jsx";
import "./inquirypage.css";

const InquiryPage = () => {
  return (
    <div className="inquiry-page">
      <div className="inquiry-header">
        <h1 className="inquiry-title">Student Inquiry Form</h1>
        <p className="inquiry-subtitle">
          Take your first step towards studying abroad. Fill out the form below and our team will get back to you shortly.
        </p>
      </div>
      
      <InquiryForm />

      <div className="inquiry-footer">
        <div className="footer-content">
          <h3>Need Help?</h3>
          <p>
            If you have any questions or need assistance, feel free to contact us at{" "}
            <a href="mailto:info@achieverscareer.edu.np">info@achieverscareer.edu.np</a> or call us at{" "}
            <a href="tel:+977-9709060751">+977-9709060751</a>
            <a href="tel:+977-9813726044">+977-9813726044</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
