import HeroPage from "./Component/HeroPage.jsx";
import PopularDestination from "./Component/PopularDestination.jsx";
import Introduction from "./Component/Introduction.jsx";
import OurServices from "./Component/OurServices.jsx";
import Testimonials from "./Component/Testimonials.jsx";
import Contact from "../../component/Contact.jsx";
import Footer from "../../component/Footer.jsx";
import "./home.css";
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