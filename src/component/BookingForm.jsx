import "./css/bookingform.css"
const BookingForm = ({toggleBookingForm}) => {
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

            <input type="text" placeholder="Your Full Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-box">
            <input type="text" placeholder="Your Address" required />
            </div>
           
            <div className="input-box">
            <input type="tel" placeholder="Your Phone Number" required />
            </div>
            <button type="submit">Book Now</button>
        </form>
            
    </div>
    </>
  )
}

export default BookingForm