import Banner from "../../component/Banner.jsx";
import Contact from "../../component/Contact.jsx";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Header Section */}
      <div className="about-header">
        <Banner bannerText={"About Us"}/>
      </div>

      <div className="about-hero-grid">
        <div className="about-section about-intro-card">
          <p>
            At <strong>Achievers Career Academy</strong>, we believe that every
            student deserves the opportunity to achieve their dreams and build a
            successful future through quality international education.
          </p>
          <p>
            We combine trusted admissions expertise with tailored support to help
            high-achieving students secure placements at leading universities
            around the world.
          </p>

          <div className="about-pill-list">
            <span>Strategic counseling</span>
            <span>University placement</span>
            <span>Visa success</span>
          </div>
        </div>

        <div className="about-stats">
          <div className="about-stat-card">
            <strong>300+</strong>
            <span>Successful student placements</span>
          </div>
          <div className="about-stat-card">
            <strong>35+</strong>
            <span>International academic destinations</span>
          </div>
          <div className="about-stat-card">
            <strong>98%</strong>
            <span>Visa approval rate</span>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Achievers Career Academy is a premium education consultancy that
          specializes in helping students explore global education
          opportunities. Our experienced team provides personalized guidance
          to students who wish to continue their higher studies in
          internationally recognized institutions.
        </p>

        <p>
          We understand that studying abroad is a life-changing decision.
          That is why we focus on honest advice, reliable support, and
          step-by-step assistance from course selection to departure.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            We empower students with professional guidance, accurate
            information, and a structured application plan that aligns with
            their academic ambitions and career goals.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to be the most respected international education consultancy
            by delivering exceptional results, transparent support, and
            outstanding student experiences.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <ul className="about-list">
          <li>Career counseling and course selection</li>
          <li>University and country selection guidance</li>
          <li>Application processing and documentation support</li>
          <li>Visa guidance and interview preparation</li>
          <li>Scholarship and financial planning advice</li>
          <li>Pre-departure and post-arrival support</li>
        </ul>
        <p>
          Our goal is to ensure that students are fully prepared, confident,
          and ready to excel in their overseas academic journey.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="about-list">
          <li>Personalized counseling tailored to each student</li>
          <li>Data-driven university matching and career planning</li>
          <li>Experienced team with global admissions knowledge</li>
          <li>Proven success with applications and visas</li>
          <li>Comprehensive support from start to finish</li>
        </ul>
      </div>

      <div className="about-section about-highlight">
        <h2>Our Commitment</h2>
        <p>
          At <strong>Achievers Career Academy</strong>, we are committed to
          supporting students at every stage of their educational journey. We
          take pride in helping students turn their ambitions into real
          global opportunities.
        </p>
      </div>
      <Contact/>
    </section>
  );
};

export default AboutUs;
