import services from "../../../data/our_services";
import "./css/ourservices.css";

const OurServices = () => {
  return (
    <section className="our-services">
      <h3>Our Services</h3>

      <div className="service-card-container">

        {/* Featured Card */}
        <div className="service-card service-card--featured">
          <img
            src="https://plus.unsplash.com/premium_photo-1664461662789-b72903263bad?w=500&auto=format&fit=crop&q=60"
            alt="Career Counselling"
          />
          <div className="service-overlay">
            <p>Career Counselling</p>
          </div>
        </div>

        {/* Dynamic Services */}
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-overlay">
              <p>{service.title}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default OurServices;