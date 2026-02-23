import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Comoponent/Navbar";
import './App.css';
import Home from "./Comoponent/Home";
import Properties from "./Comoponent/Properties";
import Footer from "./Comoponent/Footer";
import Neighborhoods from "./Comoponent/Neighborhoods";
import Blog from "./Comoponent/Blog";


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} /> 
        <Route path="/neighborhoods" element={<Neighborhoods />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
