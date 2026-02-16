import React, { useState, useRef ,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);
  const agentRef = useRef(null);
const navigate = useNavigate();

  const scrollToAgent = () => {
    agentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 const properties = [
  {
    id: 1,
    price: "$324,900",
    beds: 3,
    baths: 3,
    sqft: 2001,
    address: "14 Linquist Lane, Cathlamet, WA 98612",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  },
  {
    id: 2,
    price: "$1,219,995",
    beds: 4,
    baths: 4,
    sqft: 3811,
    address: "23922 NE 15th Way #Lt101, Sammamish, WA 98074",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
  {
    id: 3,
    price: "$894,900",
    beds: 4,
    baths: 3,
    sqft: 2256,
    address: "49 Trailside Drive, Cle Elum, WA 98922",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    id: 4,
    price: "$899,000",
    beds: 3,
    baths: 2,
    sqft: 1250,
    address: "3048 164th Place NE, Bellevue, WA 98008",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
];
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);


  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-aos="fade">
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
      <section className="worth-header" data-aos='fade-left'>
        <h2>Your Home Worth</h2>

        <div className="arrow-btn" onClick={scrollToAgent}>
          →
        </div>
      </section>

      {/* AGENT SECTION */}
      <section className="homeworth-section" ref={agentRef} data-aos='fade-right'>
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
      
 {/* PROPERTY SECTION ✅ OUTSIDE MODAL */}
    <section className="property-section" data-aos='fade-left'>

  <div className="property-header">
    <div className="header-left">
      <h2>
        Find Our <br /> Featured Properties
      </h2>
    </div>

    <div className="header-right">
      <p>
        The Wall Street Journal, they rank in the top 1.5% of all agents,
        consistently delivering exceptional results. The Wall Street Journal,
        they rank.
      </p>
    </div>
  </div>

  <div className="property-grid">
    {properties.map((property) => (
      <div
        key={property.id}
        className="property-card"
        onClick={() => navigate(`/property/${property.id}`)}
      >
        <img src={property.image} alt="property" />

        <div className="property-info">
          <h3 className="price">{property.price}</h3>

          <div className="property-details">
            <span>🛏 {property.beds} Beds</span>
            <span>🛁 {property.baths} Baths</span>
            <span>📐 {property.sqft} SqFt</span>
          </div>

          <p className="address">{property.address}</p>

          <p className="listed">
            Listed With <span className="badge">RP</span>
          </p>
        </div>
      </div>
    ))}
  </div>
<div className="see-all-wrapper" data-aos='zoom-in'>
    <button
      className="see-all-btn"
      onClick={() => navigate("/properties")}
    >
      See All Properties →
    </button>
  </div>
</section>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay" data-aos='fade-left'>
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
      {/* NEIGHBORHOODS SECTION */}
<section className="neighborhood-section" data-aos='fade-left'>
  <h2 className="neighborhood-title">
    Find Your <span>Neighborhoods</span>
  </h2>

  <div className="neighborhood-grid">
    <div className="neighborhood-card">
      <img
        src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
        alt="New York"
      />
      <div className="neighborhood-overlay">
        <h3>New York</h3>
        <p>120 Properties</p>
      </div>
    </div>

    <div className="neighborhood-card">
      <img
        src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
        alt="Los Angeles"
      />
      <div className="neighborhood-overlay">
        <h3>Los Angeles</h3>
        <p>86 Properties</p>
      </div>
    </div>

    <div className="neighborhood-card">
      <img
        src="https://images.unsplash.com/photo-1494526585095-c41746248156"
        alt="Chicago"
      />
      <div className="neighborhood-overlay">
        <h3>Chicago</h3>
        <p>64 Properties</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
