import Footer from "../pages/components/Footer/Footer";
import Navbar from "../pages/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Hero from "../pages/Hero/Hero";
import AboutUs from "../pages/AboutUs/aboutus";
import OurProgram from "../pages/OurProgram/OurProgram";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <OurProgram/>
      <Footer />

    </>
  );
}

export default App;
