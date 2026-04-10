import { useState } from "react";
import world from "../assets/img/world.png";
import tower from "../assets/img/big-ben.png";
import "./css/heropage.css";

const HeroPage = () => {
  const letters = [
    {
      short: "A",
      full: "Ambition",
      desc: "Start your journey to study abroad.",
      color: "#e63946",
      icon: "✈️",
    },
    {
      short: "C",
      full: "Consistency",
      desc: "Stay consistent towards your goals.",
      color: "#f77f00",
      icon: "📈",
    },
    {
      short: "H",
      full: "Hard Work",
      desc: "Effort is the key to success.",
      color: "#2a9d8f",
      icon: "💪",
    },
    {
      short: "I",
      full: "Innovation",
      desc: "Explore new global opportunities.",
      color: "#264653",
      icon: "💡",
    },
    {
      short: "E",
      full: "Excellence",
      desc: "Achieve excellence in education.",
      color: "#8b5cf6",
      icon: "⭐",
    },
    {
      short: "V",
      full: "Vision",
      desc: "Build your future vision.",
      color: "#0ea5e9",
      icon: "👁️",
    },
    {
      short: "E",
      full: "Effort",
      desc: "Your effort defines your result.",
      color: "#16a34a",
      icon: "🔥",
    },
    {
      short: "R",
      full: "Resilience",
      desc: "Stay strong in challenges.",
      color: "#d97706",
      icon: "🛡️",
    },
    {
      short: "S",
      full: "Success",
      desc: "Your journey ends with success.",
      color: "#ec4899",
      icon: "🏆",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = letters[activeIndex];

  return (
    <div className="hero-container">
  {/* BACKGROUND ILLUSTRATIONS */}
  {/* <img src="/images/bg-left.png" className="bg-left" alt="" />
  <img src="/images/bg-right.png" className="bg-right" alt="" /> */}

  {/* LEFT CONTENT */}
  <div className="hero-left">
    <h1 style={{ color: active.color }}>{active.full}</h1>
    <p>{active.desc}</p>
    {/* <button style={{ borderColor: active.color, color: active.color }}>
      Explore More →
    </button> */}
  </div>

  {/* RIGHT TYPOGRAPHY */}
  <div className="hero-right">
    {letters.map((item, index) => (
      <span
        key={index}
        className={`big-letter ${index === activeIndex ? "active" : ""}`}
        onMouseEnter={() => setActiveIndex(index)}
        style={{
          color: index === activeIndex ? item.color : "transparent",
          WebkitTextStroke: `.2rem ${item.color}`,
        }}
      >
        {item.short}
        
      </span>
    ))}
    <span className="icon" id="animated-icon">
            <img src={world} alt="" />
          </span>
          <span  id="static-icon">
            <img src={tower} alt="" />
          </span>
  </div>
</div>
  );
};

export default HeroPage;