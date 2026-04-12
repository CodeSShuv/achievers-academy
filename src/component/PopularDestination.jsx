import { Card } from "./Card.jsx";
import { Link } from "react-router-dom";
import popular_destination from "../data/popular_destination.js";
import "./css/populardestination.css";
const PopularDestination = () => {
  return (
    <section className="popular-destination">       
      <p className="title-bar">Study In</p> 
      <div className="destination-container">
        {popular_destination.map((destination) => {
          return (
            <Link key={destination.slug} to={`/country/${destination.slug}`} className="destination-link">
              <Card imgSrc={destination.image} name={destination.name} description={destination.description} />
            </Link>
          );
        })}
      </div> 
    </section>
  );  
};

export default PopularDestination;