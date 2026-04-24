import { useState } from "react";
import "./css/inquiryform.css";
import { submitInquiry } from "../../../api/API_INQUIRY.JS";
import {toast} from "react-hot-toast";
const InquiryForm = () => {
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    dateOfBirth: "",
    passportNo: "",

    // Academic Qualification
    qualification: "",
    collegeName: "",
    result: "",
    passedYear: "",

    // Additional Info
    maritalStatus: "",
    address: "",
    mobileNo: "",
    email: "",

    // Country & Courses
    country: "",
    courses: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const qualificationOptions = ["A Levels", "+2", "Bachelors", "Masters", "PhD"];

  const countryOptions = [
    "Select Country",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Ireland",
    "New Zealand",
  ];

  const courseOptions = [
    "Select Course",
    "Engineering",
    "Business Management",
    "Computer Science",
    "Medicine",
    "Law",
    "Arts & Humanities",
    "Social Sciences",
    "Environmental Science",
    "Data Science",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // let formData;
    try{
      console.log("Submitting Inquiry with Data:", formData);
      let res = await submitInquiry(formData);

    }catch(error){
      // console.error("Error submitting inquiry:", error);
      toast.error(error.msg || "Failed to submit inquiry. Please try again.");
      return;
    }

    console.log("Form Data Submitted:", formData);
      toast.success("Inquiry submitted successfully!");
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
       fullName: "",
    dateOfBirth: "",
    passportNo: "",

    // Academic Qualification
    qualification: "",
    collegeName: "",
    result: "",
    passedYear: "",

    // Additional Info
    maritalStatus: "",
    address: "",
    mobileNo: "",
    email: "",

    // Country & Courses
    country: "",
    courses: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="inquiry-form-container">
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Inquiry Form</h1>

        {/* Basic Info Section */}
        <div className="form-section">
          <h2 className="section-heading">Basic Information</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              onInput={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="passportNo">Passport Number </label>
            <input
              type="text"
              id="passportNo"
              name="passportNo"
              value={formData.passportNo}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="Enter passport number"
            />
          </div>
        </div>

        {/* Academic Qualification Section */}
        <div className="form-section">
          <h2 className="section-heading">Academic Qualification</h2>
          <div className="form-group">
            <label htmlFor="qualification">Highest Qualification *</label>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">Select Qualification</option>
              {qualificationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="collegeName">College/University Name *</label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="Enter college/university name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="percentageGradeCgpa">Result</label>
            <input
              type="text"
              id="result"
              name="result"
              value={formData.result}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="e.g., 85% or A+ or 3.8"
            />
          </div>

          <div className="form-group">
            <label htmlFor="passedYear">Year Passed *</label>
            <input
              type="number"
              id="passedYear"
              name="passedYear"
              value={formData.passedYear}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="e.g., 2023"
              min="1980"
              max={new Date().getFullYear()}
              required
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="form-section">
          <h2 className="section-heading">Additional Information</h2>
          <div className="form-group">
            <label htmlFor="maritalStatus">Marital Status </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNo">Mobile Number *</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="Enter mobile number"
              pattern="[0-9\-\+\s]+"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onInput={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>
        </div>

        {/* Country & Courses Section */}
        <div className="form-section">
          <h2 className="section-heading">Study Preferences</h2>
          <div className="form-group">
            <label htmlFor="country">Country to Apply </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              
            >
              {countryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="courses">Courses You Want to Study </label>
            <select
              id="courses"
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              
            >
              {courseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit Inquiry
        </button>

        {/* Success Message */}
        {submitted && (
          <div className="success-message">
            Thank you! Your inquiry has been submitted successfully.
          </div>
        )}
      </form>
    </div>
  );
};

export default InquiryForm;
