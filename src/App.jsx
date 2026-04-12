import {useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar.jsx";
import "./App.css";
import InquiryPage from "./pages/InquiryPage.jsx";
import Footer from "./component/Footer.jsx";
import TestPrep from "./pages/TestPrep.jsx";
import CountryPage from "./pages/CountryPage.jsx";
// import {  } from "react-router-dom";
const App = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/test-preparation" element={<TestPrep />} />
        <Route path="/country/:slug" element={<CountryPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;