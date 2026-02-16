import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Comoponent/Navbar";
import './App.css';
import Home from "./Comoponent/Home";
import Properties from "./Comoponent/Properties";


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} /> 
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
