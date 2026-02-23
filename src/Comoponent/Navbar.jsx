import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Bino Johnson</h1>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/neighborhoods">Neighborhoods</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="right-section">
          <button className="login-btn" onClick={() => setShowLogin(true)}>
            Sign In
          </button>

          <button 
  className="menu-btn"
  onClick={() => setMobileOpen(!mobileOpen)}
>
  {mobileOpen ? "✕" : "☰"}
</button>
          
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/properties" onClick={() => setMobileOpen(false)}>Properties</Link>
          <Link to="/neighborhoods" onClick={() => setMobileOpen(false)}>Neighborhoods</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        </div>
      )}

      {showLogin && (
  <div className="modal-overlay" data-aos='zoom-in'>
    <div className="login-modal">
      
      <span 
        className="close-btn" 
        onClick={() => setShowLogin(false)}
      >
        ✕
      </span>

      <h2>Welcome Back</h2>
      <p className="subtitle">
        Sign in to your RealityPro account
      </p>

      <label>Email Address</label>
      <input 
        type="email" 
        placeholder="Enter your email" 
      />

      <label>Password</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />

       <span
  className="eye-icon"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? <FaEye /> : <FaEyeSlash />}
</span>
      </div>

      <div className="login-options">
        <label>
          <input type="checkbox" />Remember me
        </label>
        <span className="forgot">Forgot password?</span>
      </div>

      <button className="submit-btn"> 
        Sign In
      </button>

      <p className="signup-text">
        Don't have an account? <span>Sign Up</span>
      </p>

    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
