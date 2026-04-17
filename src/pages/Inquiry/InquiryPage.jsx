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
            <a href="mailto:info@achieversacademy.com">info@achieversacademy.com</a> or call us at{" "}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
