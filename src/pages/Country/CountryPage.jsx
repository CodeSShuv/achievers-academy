import { useParams } from "react-router-dom";
import { countries } from "../../data/country_info.js";
import "./countrypage.css";
import Banner from "../../component/Banner.jsx";
import TopUniversity from "../../component/TopUniversity.jsx";
import { topUniversities } from "../../data/topuniversity_data.js";

const CountryPage = ({ toggleBookingForm }) => {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);

  if (!country) return <h2>Country Not Found</h2>;

  const stats = country.stats;

  return (
    <div className="country-page">

      {/* BANNER */}
      <Banner
        bannerText={country.name}
        bannerUrl={country.heroImage}
      />

      <div className="country-page__wrapper">

        {/* INTRO */}
        <p className="country-page__intro">
          {country.intro}
        </p>

        {/* QUICK STATS (NOW DYNAMIC) */}
        <div className="country-page__stats">

          <div className="stat">
            <h3>Top Ranked Universities</h3>
            <p>{stats.universities}</p>
          </div>

          <div className="stat">
            <h3>International Students</h3>
            <p>{stats.students}</p>
          </div>

          <div className="stat">
            <h3>Work Opportunities</h3>
            <p>{stats.work}</p>
          </div>

          <div className="stat">
            <h3>Post Study Work</h3>
            <p>{stats.postStudy}</p>
          </div>

        </div>

        {/* CTA */}
        <div className="country-page__cta">

          <div>
            <h3>Book a Free Consultation</h3>
            <p>
              Get expert guidance for your study abroad journey.
            </p>
          </div>

          <button onClick={toggleBookingForm}>
            Book Now
          </button>

        </div>

        {/* WHY CHOOSE */}
        <h2>Why Choose {country.name}?</h2>

        <div className="country-page__section">

          <div className="country-page__grid">

            {country.reasons.map((item, index) => (
              <div className="country-page__card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>

          <div className="country-page__imageCard">
            <img src={country.heroImage} alt={country.name} />
            <p>Explore student life in {country.name}</p>
          </div>

        </div>

        {/* COST SECTION (NOW DYNAMIC) */}
        <h2>Estimated Cost</h2>

        <div className="country-page__cost">

          <div className="cost-card">
            <h3>Tuition Fees</h3>
            <p>{stats.tuition}</p>
          </div>

          <div className="cost-card">
            <h3>Living Cost</h3>
            <p>{stats.living}</p>
          </div>

          <div className="cost-card">
            <h3>Visa Cost</h3>
            <p>{stats.visa}</p>
          </div>

        </div>

        {/* FACTS */}
        <h2>Amazing Facts</h2>

        <div className="country-page__facts">

          {country.facts.map((fact, index) => (
            <div className="country-page__fact" key={index}>
              <p>{fact}</p>
            </div>
          ))}

        </div>

        {/* UNIVERSITIES */}
        <div className="country-page__topuniversity">
          <TopUniversity
            country={country.name.toUpperCase()}
            universities={topUniversities[country.slug]}
          />
        </div>

        {/* FINAL CTA */}
        <div className="country-page__bottomCta">

          <h2>
            Start Your Journey to {country.name}
          </h2>

          <p>
            Talk to our expert counsellors today and get step-by-step guidance.
          </p>

          <button onClick={toggleBookingForm}>
            Book Free Consultation
          </button>

        </div>

      </div>
    </div>
  );
};

export default CountryPage;