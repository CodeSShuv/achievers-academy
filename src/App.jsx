import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import "./App.css";
import InquiryPage from "./pages/Inquiry/InquiryPage.jsx";
import Footer from "./component/Footer.jsx";
import TestPrep from "./pages/TestPrep/TestPrep.jsx";
import CountryPage from "./pages/Country/CountryPage.jsx";
import BookingForm from "./component/BookingForm.jsx";
import ChatBot from "./component/ChatBot.jsx";
import AboutUs from "./pages/About/About.jsx";
import { Toaster } from "react-hot-toast";
import StudentProfile from "./pages/Admin/Pages/StudentProfile.jsx";
// import {  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Admin from './pages/Admin/Admin.jsx';
import LoginPage from "./pages/Admin/pages/LoginPage.jsx";
const App = () => {
  const [user, setUser] = useState(null);
  // const location = useLocation();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    // if(!user &&){
    //   navigate("/admin/login");
    // }
  }, [pathname]);
  const toggleBookingForm = () => {
    setShowBookingForm((prev) => !prev);
  };
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      {showBookingForm && <BookingForm toggleBookingForm={toggleBookingForm} />}
      <Routes>
        <Route path="/" element={<Home toggleBookingForm={toggleBookingForm} />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/test-preparation" element={<TestPrep
        toggleBookingForm={toggleBookingForm} />} />
        <Route path="/study/:slug" element={<CountryPage toggleBookingForm={toggleBookingForm} />} />
       {user && <Route path ="/admin" element={<Admin />} />}
        
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
      
      
      <ChatBot />
      <Footer />
    </>
  );
};

export default App;