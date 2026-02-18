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
  const [beds,setBeds]=useState("");
  const [baths,setBaths]=useState("");
  const [layout,setLayout]=useState("split"); // grid | map | split
  const [showFilter,setShowFilter]=useState(false);

  const filteredProperties = useMemo(()=>{
    return propertiesData.filter(p=>{
      if(minPrice && p.price < minPrice) return false;
      if(maxPrice && p.price > maxPrice) return false;
      if(beds && p.beds < beds) return false;
      if(baths && p.baths < baths) return false;
      return true;
    });
  },[minPrice,maxPrice,beds,baths]);

  const clearFilter=()=>{
    setMinPrice(""); setMaxPrice(""); setBeds(""); setBaths("");
  };

  return (
    <div className="property-page">

      {/* TOP FILTER BAR */}
      <div className="top-bar1">

        <input type="text" placeholder="Search by city" />

       <div className="filter-item">
 <button
  className={`filter-btn ${showPrice ? "active" : ""}`}
  onClick={() => setShowPrice(!showPrice)}
>
  <span>$ Price</span>
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


        <select value={beds} onChange={e=>setBeds(Number(e.target.value))}>
          <option value="">Bed</option>
          {[1,2,3,4,5,6].map(n=>
            <option key={n} value={n}>{n}+</option>
          )}
        </select>

        <select value={baths} onChange={e=>setBaths(Number(e.target.value))}>
          <option value="">Bath</option>
          {[1,2,3,4,5,6].map(n=>
            <option key={n} value={n}>{n}+</option>
          )}
        </select>

        <button onClick={()=>setShowFilter(!showFilter)} className="filter-btn">
          All Filter
        </button>

        <button className="save-btn">Save Search</button>

        {/* Layout Icons */}
        <div className="layout-icons">
          <button onClick={()=>setLayout("grid")}>⬛</button>
          <button onClick={()=>setLayout("map")}>🗺</button>
          <button onClick={()=>setLayout("split")}>▣</button>
        </div>
      </div>

      {/* ADVANCED FILTER PANEL */}
      {showFilter && (
        <div className="advanced-filter">
          <button className="view-btn">View Results</button>
          <button onClick={clearFilter} className="clear-btn">Clear Filter</button>
        </div>
      )}

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
