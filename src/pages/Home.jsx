import HeroPage from "../component/HeroPage";
import PopularDestination from "../component/PopularDestination";
import Introduction from "../component/Introduction";
import OurServices from "../component/OurServices";
import Testimonials from "../component/Testimonials";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import "./css/home.css";
const Home = () => {
  return (
    <>
    <div id="home-container">
      <HeroPage></HeroPage>
      <Introduction></Introduction>
      <PopularDestination></PopularDestination>
      <OurServices/>
      <Testimonials/>
      <Contact/>
      {/* <Footer/> */}

    </div>
    </>
  );
};

export default Home;