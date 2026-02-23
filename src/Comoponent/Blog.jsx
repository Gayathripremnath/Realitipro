import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import './Blog.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
  return (
    <div className='blog-page'>
        <div className='blog-hero' data-aos="fade-up">
            <h1>Browse our news and article</h1>
            <p> We’ve been representing buyers and sellers in Santa Barbara County for over twenty years and we’re the top-producing independently owned real estate company in the area.

</p>
<div className="big-search-box" data-aos="zoom-in">
  <input type="text" placeholder="Search blog posts..." />
    <button><FaSearch /></button>
</div>
        </div>
    </div>
  )
}

export default Blog