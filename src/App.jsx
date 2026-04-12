import {useEffect,useState} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar.jsx";
import "./App.css";
import InquiryPage from "./pages/InquiryPage.jsx";
import Footer from "./component/Footer.jsx";
import TestPrep from "./pages/TestPrep.jsx";
import CountryPage from "./pages/CountryPage.jsx";
import BookingForm from "./component/BookingForm.jsx";
import ChatBot from "./component/ChatBot.jsx";
// import {  } from "react-router-dom";
const App = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const toggleBookingForm = () => {
    setShowBookingForm((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      {showBookingForm && <BookingForm toggleBookingForm={toggleBookingForm} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/test-preparation" element={<TestPrep />} />
        <Route path="/study/:slug" element={<CountryPage   toggleBookingForm= {toggleBookingForm}/>} />
      </Routes>
      <ChatBot/>
      <Footer />
    </>
  );
};

export default App;