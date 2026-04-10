import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar.jsx";
import "./App.css";
import InquiryPage from "./pages/InquiryPage.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;