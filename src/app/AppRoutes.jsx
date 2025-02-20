import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../pages/components/Navbar/Navbar";
import Hero from "../pages/Hero/Hero";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurProgram from "../pages/OurProgram/OurProgram";
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/components/Footer/Footer";
import Home from "../pages/Home/Home";

export default function AppRoutes() {
  const MainPageComponent = () => {
    return (
      <>
        <Hero />
        <Home />
        <AboutUs is_main_page={true}/>
        <OurProgram />
        <Contact />
        <Footer />
      </>
    );
  };
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPageComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-programs" element={<OurProgram />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<MainPageComponent />} />
      </Routes>
    </>
  );
}
