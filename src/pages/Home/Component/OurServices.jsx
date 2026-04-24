import services from "../../../data/our_services";
import "./css/ourservices.css";

const OurServices = () => {
  return (
    <section className="our-services">
      <h3 id="title">Our Services</h3>

      <div className="service-card-container">

        {/* Featured Card */}
        <div className="service-card service-card--featured">
          <img
            src="https://plus.unsplash.com/premium_photo-1665990294874-36ff13d2b66d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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