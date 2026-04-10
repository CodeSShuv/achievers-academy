import { Card } from "./Card.jsx";
import React from "react";
import popular_destination from "../data/popular_destination.js";
import "./css/populardestination.css";
const PopularDestination = () => {
  return (
    <section className="popular-destination">       
    <p className="title-bar">Study In</p> 
    <div className="destination-container">
        
            {
                popular_destination.map((destination) => {
                  {console.log(destination.name)}
                    return (
                       <Card imgSrc={destination.image} destinationName={destination.name} destinationDescription={destination.description}/>
                    );
                })
            }
            {/*   */}
            </div> 
    </section>
    );  
};

export default PopularDestination;