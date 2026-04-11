import React from "react";
import "./css/topuniversity.css";

const TopUniversity = ({country, universities = [] }) => {
  return (
    <section className="tu-section">
      <h1 className="tu-title">{country} Institutions We Represent</h1>

      <div className="tu-grid">
        {universities.map((uni, index) => (
          <a
            key={index}
            href={uni.link}
            target="_blank"
            rel="noreferrer"
            className="tu-card"
          >
            <img src={uni.img} alt={uni.name} className="tu-logo" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopUniversity;