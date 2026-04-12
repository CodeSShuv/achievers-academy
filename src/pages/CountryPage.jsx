import { useParams } from "react-router-dom";
import { countries } from "../data/country_info.js";
import "./css/countrypage.css";
import Banner from "../component/Banner.jsx";
import TopUniversity from "../component/TopUniversity.jsx";
import { topUniversities } from "../data/topuniversity_data.js";
const CountryPage = ({ toggleBookingForm }) => {
    const { slug } = useParams();
    const country = countries.find((c) => c.slug === slug);

    if (!country) return <h2>Country Not Found</h2>;

    return (
 <div className="country-page">

  <Banner bannerText={country.name} bannerUrl={country.heroImage} />

  <div className="country-page__wrapper">

    <p className="country-page__intro">
      {country.intro}
    </p>

    <div className="country-page__cta">
      <div>
        <h3>Book a Free Consultation</h3>
        <p>Get expert guidance for your study abroad journey.</p>
      </div>
      <button onClick={toggleBookingForm}>Book Now</button>
    </div>

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
        <p>Study destination overview</p>
      </div>

    </div>

    <h2>Amazing Facts</h2>

    <div className="country-page__facts">
      {country.facts.map((fact, index) => (
        <div className="country-page__fact" key={index}>
          <p>{fact}</p>
        </div>
      ))}
    </div>

    <div className="country-page__topuniversity">
        <TopUniversity country={country.name.toUpperCase()} universities={topUniversities[country.slug]} />
    </div>

  </div>
</div>
    );
}
export default CountryPage;