import Footer from "../pages/components/Footer/Footer";
import Navbar from "../pages/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Hero from "../pages/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Footer />
    </>
  );
}

export default App;
