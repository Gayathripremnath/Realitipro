// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo and About */}
        <div className="footer-about">
          <img src={logo} className="footer-logo-img" />
          <h2 className="footer-logo-text">Bino Johnson</h2>
          <p>
            Our extensive collection of child themes are beautiful and designed
            to convert, and they'll save you a ton of time over building websites
            from scratch. Our extensive collection of child themes are beautiful.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-link-column">
            <h4>Link</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h4>Learn</h4>
            <ul>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/neighborhoods">Neighborhoods</Link></li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h4>Listing</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <p>&copy; 2026 Bino Johnson, All Rights Reserved</p>
        <div className="footer-legal">
          <Link to="/admin">Admin Login</Link>
          <span className="legal-sep">|</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span className="legal-sep">|</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
