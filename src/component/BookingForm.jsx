import "./css/bookingform.css"
import { useState } from "react";
import { submitBooking } from "../api/API_BOOKING.JS";
import toast from "react-hot-toast";
const BookingForm = ({toggleBookingForm}) => {
 const [fullName,setFullName] = useState("");
 const [email,setEmail] = useState("");
 const [address,setAddress] = useState("");
 const [phoneNumber,setPhoneNumber] = useState("");
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log("Input changed:", name, value);
      switch (name) {
        case "fullName":
          setFullName(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "address":
          setAddress(value);
          break;
        case "phoneNumber":
          setPhoneNumber(value);
          break;
        default:
          break;
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting booking:", { fullName, email, address, phoneNumber });
      await submitBooking({ fullName, email, address, phoneNumber });
      
    }
      catch (error) {
        toast.error(error.msg || "Failed to submit booking. Please try again.");
        console.error("Error submitting booking:", error);
        return;
      }
    setSubmitted(true);
    toast.success("Booking submitted successfully! We will contact you shortly.");
    // Reset form after 2 seconds
    setTimeout(() => {
      setFullName("");
      setEmail("");
      setAddress("");
      setPhoneNumber(""); 
      setSubmitted(false);
    }, 2000);
  };
  if (submitted) {
    return (
      <div className="booking-form">
        <h2>Booking Submitted</h2>
        <p>Thank you for your booking! We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <>
    <div className="backdrop">

    </div>
    <div className="booking-form">
      <div className="booking-form-header">
        <button onClick={toggleBookingForm}>&times;</button>
      </div>
        <h2>Book a Free Consultation</h2>
        <p>Get expert guidance for your study abroad journey.</p>
        <form>
          <div className="input-box">

            <input name="fullName" value={fullName} onChange={handleChange} type="text" placeholder="Your Full Name" required />
          </div>
          <div className="input-box">
            <input name="email" value={email} onChange={handleChange} type="email" placeholder="Your Email" required />
            </div>
            <div className="input-box">
            <input name="address" value={address} onChange={handleChange} type="text" placeholder="Your Address" required />
            </div>
            <div className="input-box">
            <input name="phoneNumber" value={phoneNumber} onChange={handleChange} type="tel" placeholder="Your Phone Number" required />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Book Now
            </button>
        </form>
            
    </div>
    </>
  )
}

export default BookingForm