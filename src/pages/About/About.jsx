import Banner from "../../component/Banner.jsx";
import Contact from "../../component/Contact.jsx";
import "./aboutus.css";

const stats = [
  { value: "300+", label: "Students Placed" },
  { value: "35+", label: "Global Destinations" },
  { value: "98%", label: "Visa Approval Rate" },
  { value: "10+", label: "Years of Excellence" },
];

const services = [
  {
    icon: "🎯",
    title: "Career Counseling",
    desc: "Tailored guidance to align your strengths with the right academic path.",
  },
  {
    icon: "🏛️",
    title: "University Placement",
    desc: "Strategic matching with globally recognized institutions.",
  },
  {
    icon: "📄",
    title: "Application Support",
    desc: "End-to-end documentation and application processing.",
  },
  {
    icon: "✈️",
    title: "Visa Guidance",
    desc: "Expert preparation and interview coaching for high approval rates.",
  },
  {
    icon: "💰",
    title: "Scholarship Advice",
    desc: "Discover funding options and financial planning strategies.",
  },
  {
    icon: "🌍",
    title: "Pre-Departure Support",
    desc: "Everything you need before and after you land abroad.",
  },
];

const whyUs = [
  "Personalized counseling for every student",
  "Data-driven university matching",
  "Experienced team with global admissions knowledge",
  "Proven track record with applications & visas",
  "Comprehensive support from start to finish",
];

const AboutUs = () => {
  return (
    <section className="au-page">
      {/* <Banner bannerText={"About Us"} /> */}

      {/* ── HERO SPLIT ─────────────────────────── */}
      <div className="au-hero">
        <div className="au-hero__text">
          <span className="au-eyebrow">Who We Are</span>
          <h1 className="au-hero__heading">
            Turning Ambition into <em>Global Opportunity</em>
          </h1>
          <p className="au-hero__body">
            Achievers Career Academy is a premium education consultancy
            dedicated to placing high-achieving students at leading universities
            worldwide. We combine trusted expertise with deeply personalised
            support — from the first consultation to departure day.
          </p>
          <div className="au-pills">
            <span className="au-pill">Strategic Counseling</span>
            <span className="au-pill">University Placement</span>
            <span className="au-pill">Visa Success</span>
          </div>
        </div>
        <div className="au-hero__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
            alt="Students celebrating graduation"
            className="au-hero__img"
          />
          <div className="au-hero__img-badge">
            <strong>Est. 2014</strong>
            <span>A decade of excellence</span>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ────────────────────────── */}
      <div className="au-stats">
        {stats.map((s) => (
          <div key={s.value} className="au-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── MISSION / VISION ───────────────────── */}
      <div className="au-mv-section">
        <div className="au-mv-card au-mv-card--mission">
          <div className="au-mv-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
              alt="Team in discussion"
            />
          </div>
          <div className="au-mv-card__body">
            <span className="au-eyebrow">Our Mission</span>
            <h2>Empowering Students with Clarity & Confidence</h2>
            <p>
              We equip every student with professional guidance, accurate
              information, and a structured application plan aligned to their
              academic ambitions and long-term career goals.
            </p>
          </div>
        </div>

        <div className="au-mv-card au-mv-card--vision">
          <div className="au-mv-card__body">
            <span className="au-eyebrow">Our Vision</span>
            <h2>The Most Respected Consultancy in the Region</h2>
            <p>
              We aim to become the region's most trusted international education
              partner — delivering exceptional results, radical transparency, and
              outstanding student experiences at every step.
            </p>
          </div>
          <div className="au-mv-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80"
              alt="Globe and education"
            />
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ──────────────────────── */}
      <div className="au-services-section">
        <div className="au-section-header">
          <span className="au-eyebrow">What We Do</span>
          <h2>Services Built Around Your Journey</h2>
        </div>
        <div className="au-services-grid">
          {services.map((svc) => (
            <div key={svc.title} className="au-svc-card">
              <div className="au-svc-card__icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY CHOOSE US ──────────────────────── */}
      <div className="au-why-section">
        <div className="au-why__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
            alt="Students collaborating"
          />
        </div>
        <div className="au-why__body">
          <span className="au-eyebrow">Why Choose Us</span>
          <h2>A Partner You Can Trust at Every Stage</h2>
          <ul className="au-why-list">
            {whyUs.map((item) => (
              <li key={item}>
                <span className="au-check">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── COMMITMENT BANNER ──────────────────── */}
      <div className="au-commitment">
        <div className="au-commitment__inner">
          <span className="au-eyebrow au-eyebrow--light">Our Commitment</span>
          <h2>
            We Stand With You — From First Consultation to First Day of Class
          </h2>
          <p>
            At Achievers Career Academy, we take pride in transforming
            students' ambitions into real global opportunities. Every student
            who walks through our door is treated as a unique individual
            deserving personalised, honest, and expert support.
          </p>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default AboutUs;