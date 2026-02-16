import React, { useState, useRef } from "react";
import "./Home.css";
import heroImage from "../assets/hero.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);
  const agentRef = useRef(null);

  const scrollToAgent = () => {
    agentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Find Your Dream Property</h1>
          <p>
            Explore Neighborhoods and Get Real-Time Estimates With a Trusted
            Global Advisor
          </p>

          <div className="search-box">
            <input type="text" placeholder="Search by city" />
            <button>Find Property</button>
          </div>
        </div>
      </section>

      {/* YOUR HOME WORTH SECTION TITLE */}
      <section className="worth-header">
        <h2>Your Home Worth</h2>

        <div className="arrow-btn" onClick={scrollToAgent}>
          →
        </div>
      </section>

      {/* AGENT SECTION */}
      <section className="homeworth-section" ref={agentRef}>
        <div className="homeworth-container">
          <div className="homeworth-image">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              alt="Agent"
            />
          </div>

          <div className="homeworth-content">
            <h2>Bino Johnson</h2>
            <h4>Trusted Agent</h4>
            <p>
              Our extensive collection of child themes are beautiful and
              designed to convert and save you time building websites.
            </p>

            <button
              className="inquiry-btn"
              onClick={() => setOpen(true)}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </span>

            <h3>Send Inquiry</h3>

            <form className="inquiry-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>

              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <textarea
                placeholder="Message"
                rows="4"
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
