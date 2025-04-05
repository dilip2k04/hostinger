import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../pages/components/Navbar/Navbar";
import Hero from "../pages/Hero/Hero";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurProgram from "../pages/OurProgram/OurProgram";
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/components/Footer/Footer";
import Home from "../pages/Home/Home";
import ScrollToTop from "../pages/components/ScrollToTop/ScrollToTop";
import PrivacyPolicy from "../pages/Privacy Policy";
import TermsAndConditions from "../pages/Terms and Conditions";

export default function AppRoutes() {
  const MainPageComponent = () => {
    return (
      <>
        <Hero />
        <Home />
        <OurProgram is_main_page={true}/>
        {/* <AboutUs is_main_page={true}/> */}
        <Contact />
        <PrivacyPolicy />
        <TermsAndConditions />
      </>
    );
  };
  return (
    <>
<ScrollToTop/>
      {/* <Navbar /> */}
      <Navbar />
<ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-programs" element={<OurProgram />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<MainPageComponent />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />

    </>
  );
}