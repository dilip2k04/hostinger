import Footer from "../pages/components/Footer/Footer";
import Navbar from "../pages/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Hero from "../pages/Hero/Hero";
import AboutUs from "../pages/AboutUs/aboutus";
import OurProgram from "../pages/OurProgram/OurProgram";
import Contact from "../pages/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home from "../pages/Home/Home";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar />
      <Hero/>
      <Home />
      <AboutUs/>
      <OurProgram/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
