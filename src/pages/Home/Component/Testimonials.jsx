import "./css/testimonials.css";
import testimonials from "../../../data/testimonials.js";
const Testimonials = () => {
    return (
        <section className="testimonials">
            <h3>Testimonials</h3>
            <div className="testimonial-card-container">
                {testimonials.map(testimonial => (
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        {testimonial.message}
                    </p>
                    <div className="testimonials-img-container">

                    <img src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <h4 className="testimonial-name">— {testimonial.name}</h4>
                </div>
                ))}
            </div>
        </section>
    )
}
export default Testimonials;
