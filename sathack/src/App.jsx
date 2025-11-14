import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

import Login from "./pages/Login";   
import Dashboard from "./pages/Dashboard";  
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="bg-black min-h-screen font-[Poppins]">
              <Hero />
              <FeaturesSection />
              <HowItWorks />
              <AboutSection />
              <Testimonials />
              <FAQSection />
              <Footer />
            </div>
          }
        />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD PAGE */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
