import "./css/testimonials.css";
import testimonials from "../../../data/testimonials.js";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3>What Our Students Say</h3>

      <div className="testimonial-card-container">

        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>

            {/* Header */}
            <div className="testimonial-header">

              <div className="testimonial-img">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                /> */}
              </div>

              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>

                {/* Stars */}
                <div className="stars">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Body */}
            <p className="testimonial-text">
              "{testimonial.message}"
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;