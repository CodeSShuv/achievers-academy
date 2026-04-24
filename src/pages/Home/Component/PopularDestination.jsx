import { Card } from "../../../component/Card.jsx";
import { Link } from "react-router-dom";
import popular_destination from "../../../data/popular_destination.js";
import "./css/populardestination.css";
const PopularDestination = ({ toggleBookingForm }) => {
  return (
    <>
    <section className="popular-destination">       
      <p className="title-bar">Study In</p> 
      <div className="destination-container">
        {popular_destination.map((destination) => {
          return (
            <Link key={destination.slug} to={`/study/${destination.slug}`} className="destination-link">
              <Card imgSrc={destination.image} name={destination.name} description={destination.description} />
            </Link>
          );
        })}
      </div> 
    </section>
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-text">
          <h2>Book a Free Consultation</h2>
          <p>
            Get expert guidance for your study abroad journey and discover the best opportunities tailored for you.
          </p>
        </div>

        <div className="cta-action">
          <button onClick={toggleBookingForm}>
            Book Now
          </button>
        </div>

      </div>
    </section>
        </>
  );  
};

export default PopularDestination;