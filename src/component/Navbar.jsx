import logo from "../assets/img/logo.jpg";
import hamburger from "../assets/img/menu.png";
import "./css/navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="hamburgermenu">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={hamburger} alt="Hamburger Menu" />
                </button>
            </div>
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
                <div className="dropdown">
                    <NavLink to="/test-preparation" className={({ isActive }) => isActive ? "active-link" : ""}>Test Preparation</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/ielts" className={({ isActive }) => isActive ? "active-link" : ""}>IELTS</NavLink>
                        
                        <NavLink to="/pte" className={({ isActive }) => isActive ? "active-link" : ""}>PTE</NavLink>
                        <NavLink to="/duolingo" className={({ isActive }) => isActive ? "active-link" : ""}>Duolingo</NavLink>
                    </div>
                </div>
                <div className="dropdown">
                    <NavLink to="/study/australia" className={({ isActive }) => isActive ? "active-link" : ""}>Study Abroad</NavLink>
                    <div className="dropdown-content">
                        <NavLink to="/study/usa" className={({ isActive }) => isActive ? "active-link" : ""}>USA</NavLink>
                        <NavLink to="/study/uk" className={({ isActive }) => isActive ? "active-link" : ""}>UK</NavLink>
                        <NavLink to="/study/canada" className={({ isActive }) => isActive ? "active-link" : ""}>Canada</NavLink>
                        <NavLink to="/study/australia" className={({ isActive }) => isActive ? "active-link" : ""}>Australia</NavLink>
                        <NavLink to="/study/new-zealand" className={({ isActive }) => isActive ? "active-link" : ""}>New Zealand</NavLink>
                    </div>
                </div>
                <NavLink to="/inquiry" className={({ isActive }) => isActive ? "active-link" : ""}>Inquiry Form</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;