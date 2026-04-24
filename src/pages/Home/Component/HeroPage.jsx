import { useEffect, useState } from "react";
import world from "../../../assets/img/world.png";
import tower from "../../../assets/img/big-ben.png";
import "./css/heropage.css";

const HeroPage = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const letters = [
    {
      short: "A",
      full: "Ambition",
      desc: "Start your journey to study abroad.",
      color: "#e63946",
     
      imgLink: `${baseUrl}/img/trophy.png`,
      // icon: "✈️",
    },
    {
      short: "C",
      full: "Consistency",
      desc: "Stay consistent towards your goals.",
      color: "#f77f00",
      icon: "📈",
      imgLink: `${baseUrl}/img/consistency.png`,
    },
    {
      short: "H",
      full: "Hard Work",
      desc: "Effort is the key to success.",
      color: "#2a9d8f",
      icon: "💪",
      imgLink: `${baseUrl}/img/hard-work.png`,
    },
    {
      short: "I",
      full: "Innovation",
      desc: "Explore new global opportunities.",
      color: "#264653",
      icon: "💡",
      imgLink: `${baseUrl}/img/innovation.png`,
    },
    {
      short: "E",
      full: "Excellence",
      desc: "Achieve excellence in education.",
      color: "#8b5cf6",
      icon: "⭐",
      imgLink: `${baseUrl}/img/exe.png`,
    },
    {
      short: "V",
      full: "Vision",
      desc: "Build your future vision.",
      color: "#0ea5e9",
      icon: "👁️",
      imgLink: `${baseUrl}/img/vision.png`,
    },
    {
      short: "E",
      full: "Effort",
      desc: "Your effort defines your result.",
      color: "#16a34a",
      icon: "🔥",
      imgLink: `${baseUrl}/img/effort.png`,
    },
    {
      short: "R",
      full: "Resilience",
      desc: "Stay strong in challenges.",
      color: "#d97706",
      icon: "🛡️",
      imgLink: `${baseUrl}/img/res.png`,
    },
    {
      short: "S",
      full: "Success",
      desc: "Your journey ends with success.",
      color: "#ec4899",
      imgLink: `${baseUrl}/img/student.png`,
      icon: "🏆",
    },
  ];
  const [animate,setAnimate] = useState(false);
  const startAnimation= ()=>{
    setAnimate(true)
    let animationTimeOut = setTimeout(() => {
      setAnimate(false);
    }, 3000);  
    return () => clearTimeout(animationTimeOut);
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const active = letters[activeIndex];
useEffect(() => {
    
},[activeIndex]);
  return (
    <div className="hero-container">
  {/* BACKGROUND ILLUSTRATIONS */}
  {/* <img src="/images/bg-left.png" className="bg-left" alt="" />
  <img src="/images/bg-right.png" className="bg-right" alt="" /> */}

  {/* LEFT CONTENT */}
  <div className="hero-left">
    <div className="left-text-container">

  <h1 className={`text ${!animate ? "fadeIn" : ""}`} style={{ color: active.color }}>{active.full}</h1>
  <p data-color={active.color} className={`text ${!animate ? "fadeIn" : ""}`}
    style={{ "--shadow-color": active.color }}>{active.desc}</p>
    </div>
    <div className="hero-image">
      <img src={active.imgLink}  alt="" />
    </div>
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