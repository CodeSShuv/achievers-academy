import "./css/introduction.css";
import vision from "../assets/img/vision.png";
import inspiration from "../assets/img/inspiration.png";
import achievement from "../assets/img/achievement.png";
const Introduction = () => {
    return (
        <section className="introduction">
            <div className="introduction-container">
                <h1>
                    <div className="welcome-text">
                        Welcome to 
                        </div>
                        Achievers Career Academy</h1>
                <div className="intro-cards-container">
                    <div className="intro-card">
                        <img src={vision} alt="Vision" />
                        <h3>Re-emerging Vision</h3>
                        <p>
                           Achievers Career Academy is re-emerging with a strong vision to become a leading educational consultancy in Nepal.
                        </p>
                    </div>
                    {/* --------- */}
                     <div className="intro-card">
                        <img src={inspiration} alt="Mission" />
                        <h3>Student-Focused Approach</h3>
                        <p>
                          We provide reliable, transparent, and student-centered guidance for studying abroad.
                        </p>
                    </div>
                    {/* ------------ */}
                     <div className="intro-card">
                        <img src={achievement} alt="Achievement" />
                        <h3>Global Success</h3>
                        <p>
                          We empower students to achieve their dreams of international education and successful careers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Introduction;