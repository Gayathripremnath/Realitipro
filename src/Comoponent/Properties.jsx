import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./Properties.css";

const priceOptions = [
  50000,100000,150000,200000,250000,300000,
  400000,500000,750000,1000000,1500000,
  2000000,3000000,5000000,10000000,20000000
];

const propertiesData = [
  { id:1, price:165000, beds:2, baths:1, sqft:756, address:"Port Angeles", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"},
  { id:2, price:799990, beds:5, baths:4, sqft:3399, address:"Maple Valley", img:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c"},
  { id:3, price:295000, beds:3, baths:2, sqft:1800, address:"Seattle", img:"https://images.unsplash.com/photo-1568605114967-8130f3a36994"},
  { id:4, price:1200000, beds:4, baths:3, sqft:2800, address:"Vancouver", img:"https://images.unsplash.com/photo-1599423300746-b62533397364"},
  { id:5, price:450000, beds:3, baths:2, sqft:2000, address:"Bellevue", img:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c"},
  { id:6, price:850000, beds:4, baths:3, sqft:3200, address:"Redmond", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"}, 

];

export default function PropertyPage() {

  const [minPrice,setMinPrice]=useState("");
  const [showPrice, setShowPrice] = useState(false);
  const [maxPrice,setMaxPrice]=useState("");
  const [minBeds,setMinBeds]=useState("");
  const [showBeds, setShowBeds] = useState(false);
  const [maxBeds,setMaxBeds]=useState("");
  const [minBaths,setMinBaths]=useState("");
  const [showBaths, setShowBaths] = useState(false);
  const [maxBaths,setMaxBaths]=useState("");
  const [layout,setLayout]=useState("split"); 
  const [showFilter,setShowFilter]=useState(false);

  const filteredProperties = useMemo(()=>{
    return propertiesData.filter(p=>{
      if(minPrice && p.price < minPrice) return false;
      if(maxPrice && p.price > maxPrice) return false;
      if(minBeds && p.beds < minBeds) return false;
      if(maxBeds && p.beds > maxBeds) return false;
      if(minBaths && p.baths < minBaths) return false;
      if(maxBaths && p.baths > maxBaths) return false;
      return true;
    });
  },[minPrice,maxPrice,minBeds,maxBeds,minBaths,maxBaths]);

  const clearFilter=()=>{
    setMinPrice(""); setMaxPrice(""); setMinBeds(""); setMaxBeds(""); setMinBaths(""); setMaxBaths("");
  };
  const types = [
  "Business Opportunity",
  "Commercial Sale",
  "Apartment",
  "Condo",
  "Villa",
  "Townhouse",
  "Penthouse"
];

  return (
    <div className="property-page">

      <div className="top-bar1">

        <input type="text" placeholder="Search by city" />

       <div className="filter-item">
 <button
  className={`filter-btn ${showPrice ? "active" : ""}`}
  onClick={() => setShowPrice(!showPrice)}
>
  <span> $ Price</span>
  <span className={`arrow ${showPrice ? "rotate" : ""}`}>▾</span>
</button>


  {showPrice && (
    <div className="price-dropdown">
      <div className="price-row">
        <select
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value ? Number(e.target.value) : "")
          }
        >
          <option value="">No Min</option>
          {priceOptions.map((p) => (
            <option key={p} value={p}>
              ${p.toLocaleString()}
            </option>
          ))}
        </select>


        <select
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value ? Number(e.target.value) : "")
          }
        >
          <option value="">No Max</option>
          {priceOptions.map((p) => (
            <option key={p} value={p}>
              ${p.toLocaleString()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )}
</div>


        <div className="filter-item">
          <button
            className={`filter-btn ${showBeds ? "active" : ""}`}
            onClick={() => setShowBeds(!showBeds)}
          >
            <span> Beds</span>
            <span className={`arrow ${showBeds ? "rotate" : ""}`}>▾</span>
          </button>

          {showBeds && (
            <div className="beds-dropdown">
              <div className="price-row">
                <select
                  value={minBeds}
                  onChange={(e) =>
                    setMinBeds(e.target.value ? Number(e.target.value) : "")
                  }
                >
                  <option value="">No Min</option>
                  {[1,2,3,4,5,6].map((b) => (
                    <option key={b} value={b}>
                      {b}+
                    </option>
                  ))}
                </select>

                <select
                  value={maxBeds}
                  onChange={(e) =>
                    setMaxBeds(e.target.value ? Number(e.target.value) : "")
                  }
                >
                  <option value="">No Max</option>
                  {[1,2,3,4,5,6].map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="filter-item">
          <button
            className={`filter-btn ${showBaths ? "active" : ""}`}
            onClick={() => setShowBaths(!showBaths)}
          >
            <span>Baths</span>
            <span className={`arrow ${showBaths ? "rotate" : ""}`}>▾</span>
          </button>

          {showBaths && (
            <div className="baths-dropdown">
              <div className="price-row">
                <select
                  value={minBaths}
                  onChange={(e) =>
                    setMinBaths(e.target.value ? Number(e.target.value) : "")
                  }
                >
                  <option value="">No Min</option>
                  {[1,2,3,4,5,6].map((b) => (
                    <option key={b} value={b}>
                      {b}+
                    </option>
                  ))}
                </select>

                <select
                  value={maxBaths}
                  onChange={(e) =>
                    setMaxBaths(e.target.value ? Number(e.target.value) : "")
                  }
                >
                  <option value="">No Max</option>
                  {[1,2,3,4,5,6].map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <button onClick={()=>setShowFilter(!showFilter)} className="filter-btn">
          All Filter
        </button>

        <button className="save-btn">Save Search</button>

        {/* Layout Icons */}
       
      </div>

      {/* ADVANCED FILTER PANEL */}
   {showFilter && (
  <div className="filter-overlay">
    <div className="filter-modal">

      {/* CLOSE BUTTON INSIDE BOX */}
      <button 
        className="close-btn"
        onClick={() => setShowFilter(false)}
      >
        ✖
      </button>

      <div className="filter-header">
        <button className="view-btn" onClick={()=>setShowFilter(false)}>
          View Results
        </button>

        <button onClick={clearFilter} className="clear-btn">
          Clear Filter
        </button>
      </div>

      <div className="filter-grid">

        <div className="filter-group">
          <h4>Garage</h4>
          <div className="row">
            <select>
              <option>No Min</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>

            <select>
              <option>No Max</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className="filter-group">
          <h4>Square Footage</h4>
          <div className="row">
            <select>
              <option>No Min</option>
               <option>750</option>
              <option>1000</option>
              <option>1100</option>
              <option>1200</option>
              <option>1300</option>
              <option>1400</option>
              <option>1500</option>
              <option>1600</option>
              <option>1700</option>
              <option>1800</option>
              <option>1900</option> 
              <option>2000</option>   
              <option>2250</option>
              <option>2500</option>
              <option>2750</option>
              <option>3000</option>
              <option>4000</option>
              <option>5000</option>
              <option>7500</option>
              <option>10000</option>
            </select>

            <select>
              <option>No Max</option>
              <option>750</option>
              <option>1000</option>
              <option>1100</option>
              <option>1200</option>
              <option>1300</option>
              <option>1400</option>
              <option>1500</option>
              <option>1600</option>
              <option>1700</option>
              <option>1800</option>
              <option>1900</option> 
              <option>2000</option>   
              <option>2250</option>
              <option>2500</option>
              <option>2750</option>
              <option>3000</option>
              <option>4000</option>
              <option>5000</option>
              <option>7500</option>
              <option>10000</option>
            </select>
          </div>
        </div>

        <div className="filter-group">
          <h4>Lot Size</h4>
          <div className="row">
            <select>
              <option>No Min</option>
              <option>2000 sq ft</option>
              <option>4500 sq ft</option>
              <option>6500 sq ft</option>
              <option>8000 sq ft</option>
              <option>9500 sq ft</option>
              <option>.25 acres</option>
              <option>.5 acres</option>
              <option>1 acre</option>
              <option>2 acres</option>
              <option>3 acres</option>
              <option>4 acres</option>
              <option>5 acres</option>
              <option>10 acres</option>
              <option>20 acres</option>
              <option>40 acres</option>
              <option>100 acres</option>
            </select>

            <select>
              <option>No Max</option>
                  <option>4500 sq ft</option>
              <option>6500 sq ft</option>
              <option>8000 sq ft</option>
              <option>9500 sq ft</option>
              <option>.25 acres</option>
              <option>.5 acres</option>
              <option>1 acre</option>
              <option>2 acres</option>
              <option>3 acres</option>
              <option>4 acres</option>
              <option>5 acres</option>
              <option>10 acres</option>
              <option>20 acres</option>
              <option>40 acres</option>
              <option>100 acres</option>
            </select>
          </div>
        </div>

        <div className="filter-group">
          <h4>Year Built</h4>
          <div className="row">
            <select>
              <option>No Min</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option> 
              <option>2015</option>
              <option>2010</option>
              <option>2005</option>
              <option>2000</option>
              <option>1990</option>
              <option>1980</option>
              <option>1970</option>
              <option>1960</option>
              <option>1950</option>
              <option>1940</option>
              <option>1920</option>
              <option>1900</option>
            </select>

            <select>
              <option>No Max</option>
                 <option>2026</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option> 
              <option>2015</option>
              <option>2010</option>
              <option>2005</option>
              <option>2000</option>
              <option>1990</option>
              <option>1980</option>
              <option>1970</option>
              <option>1960</option>
              <option>1950</option>
              <option>1940</option>
              <option>1920</option>
              <option>1900</option>
            </select>
          </div>
        </div>

      </div>
  <div className="filter-section">
  <h3>Property Type</h3>

  <div className="property-types">
    {types.map((type, index) => (
      <label key={index} className="checkbox-box">
        <input type="checkbox" />
        <span>{type}</span>
      </label>
    ))}
  </div>
</div>
    </div>
  </div>
)}

 <div className="layout-icons">
         <div> <button onClick={()=>setLayout("grid")}>⬛</button></div>
       <div><button onClick={()=>setLayout("map")}>🗺</button></div>   
          <div><button onClick={()=>setLayout("split")}>▣</button></div>
        </div>
      {/* CONTENT AREA */}
      <div className={`content ${layout}`}>

        {(layout==="grid" || layout==="split") && (
          <div className="property-gridd">
            {filteredProperties.map((item,index)=>(
              <motion.div
                key={item.id}
                className="property-card"
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.4,delay:index*0.1}}
                viewport={{once:true}}
              >
                <img src={item.img} alt="" />
                <div className="card-content">
                  <h3>${item.price.toLocaleString()}</h3>
                  <p>{item.address}</p>
                  <div className="details">
                    <span>{item.beds} Beds</span>
                    <span>{item.baths} Baths</span>
                    <span>{item.sqft} SqFt</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {(layout==="map" || layout==="split") && (
          <div className="map-view">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Vancouver&t=&z=5&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        )}

      </div>

    </div>
  );
}
