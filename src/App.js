import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Approach from "pages/Approach/Approach";
import Services from "pages/Services/Services";
import MarketReport from "pages/MarketReport";
import Contact from "pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-approach" element={<Approach />} />
        <Route path="/services" element={<Services />} />
        <Route path="/market-report" element={<MarketReport />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
