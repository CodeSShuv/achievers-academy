import "./testPrep.css";
import Banner from "../../component/Banner.jsx";
import { testPrepData } from "../../data/test_prep_card.js";

const TestPrep = ({toggleBookingForm}) => {


    return (
        <div className="testprep-container">
            <Banner bannerUrl={"https://images.unsplash.com/photo-1660927059794-152d06e11016?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                bannerText="Test Preparation" />
            <div className="test-prep-content">
                {testPrepData.map((test) => (
                    <div className="test-classes-card" key={test.id}>
                        <div className="test-img">
                            <img src={test.image} alt={test.title} />
                        </div>
                        <div className="heading">
                            <h4>{test.title}</h4>
                        </div>
                        <div className="description">
                            <p>
                                {test.description}
                            </p>
                            <a href={test.link} target="_blank">
                                Read More
                            </a>
                        </div>
                    </div>))}
               
            </div>
            <section className="cta-section">
      <div className="cta-container">

        <div className="cta-text">
          <h2>Book a Class</h2>
          <p>
            Get expert guidance for your study abroad journey and discover the best opportunities tailored for you.
          </p>
        </div>

        <div className="cta-action">
          <button onClick={toggleBookingForm}>
            Book Now
          </button>
        </div>

      </div>
    </section>
        </div>
    );
}
export default TestPrep;