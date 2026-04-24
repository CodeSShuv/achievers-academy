import "./css/introduction.css";
import vision from "../../../assets/img/vision.png";
import inspiration from "../../../assets/img/inspiration.png";
import achievement from "../../../assets/img/achievement.png";

import { useEffect, useRef, useState } from "react";

const Introduction = () => {
  
  const statsRef = useRef(null);
  const hasAnimated = useRef(false); 

  const [startCount, setStartCount] = useState(false);

  // Detect when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setStartCount(true);
          hasAnimated.current = true; // run only once
        }
      },
      { threshold: 0.3 }
    );

    const el = statsRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [startCount, end, duration]);

    return count;
  };

  const years = useCounter(15);
  const students = useCounter(5000);
  const success = useCounter(98);

  return (
    <>
      {/* ================= INTRO SECTION ================= */}

      <section className="introduction">
        <div className="introduction-container">

          <h1>
            <div className="welcome-text">Welcome to</div>
            Achievers Career Academy
          </h1>

          <div className="intro-cards-container">

            <div className="intro-card">
              <img src={vision} alt="Vision" />
              <h3>Re-emerging Vision</h3>
              <p>
                Achievers Career Academy is re-emerging with a strong vision
                to become a leading educational consultancy in Nepal.
              </p>
            </div>

            <div className="intro-card">
              <img src={inspiration} alt="Mission" />
              <h3>Student-Focused Approach</h3>
              <p>
                We provide reliable, transparent, and student-centered guidance
                for studying abroad.
              </p>
            </div>

            <div className="intro-card">
              <img src={achievement} alt="Achievement" />
              <h3>Global Success</h3>
              <p>
                We empower students to achieve their dreams of international
                education and successful careers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SUMMARY STATS ================= */}

      <div
        className={`summary-stats ${startCount ? "show" : ""}`}
        ref={statsRef}
      >

        <div className="stat-card">
          <span className="stat-number">
            {years}+
          </span>
          <span className="stat-label">Years of Experience</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">
            {students.toLocaleString()}+
          </span>
          <span className="stat-label">Students</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">
            {success}%
          </span>
          <span className="stat-label">Success Rate</span>
        </div>

      </div>
    </>
  );
};

export default Introduction;