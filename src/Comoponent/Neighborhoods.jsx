import React, { useEffect } from 'react'
import './Neighborhoods.css';
import { FaSearch } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Neighborhoods = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const neighborhoods = [
    {
      id: 1,
      name: "New York",
      properties: "120 Properties",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
    },
    {
      id: 2,
      name: "Los Angeles",
      properties: "86 Properties",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
      id: 3,
      name: "Chicago",
      properties: "64 Properties",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    }
  ];

  return (
    <div className='neighborhood-page'>
      <div className="neighborhood-hero" data-aos="fade-down">
        <h1>Find Your  Neighborhoods</h1>
        <p>Top priority and committed to walking with them</p>
        <div className="big-search-box" data-aos="zoom-in">
          <input type="text" placeholder="Enter neighborhood, city, or zip code..." />
      <button><FaSearch /></button>
    
        </div>
      </div>

      <div className="neighborhood-container">
        <div className="neighborhood-grid">
          {neighborhoods.map((n) => (
            <div key={n.id} className="neighborhood-card" data-aos="fade-up">
              <img src={n.image} alt={n.name} />
              <div className="neighborhood-overlay">
                <h3>{n.name}</h3>
                <p>{n.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
  )
}

export default Neighborhoods