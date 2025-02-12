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
import { ToastContainer } from "react-toastify";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
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
