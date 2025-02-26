import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

export default function Navbar() {
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // Track navbar state

  const toggleNavbar = () => {
    if (navbarCollapseRef.current) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: true,
      });
      setIsOpen(!isOpen); // Toggle state
    }
  };

  const handleNavLinkClick = (path, sectionId) => {
    navigate(`${path}?scrollTo=${sectionId}`);

    // Close the navbar if it's open
    if (navbarCollapseRef.current.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false,
      });
      bsCollapse.hide();
      setIsOpen(false); // Set state to closed
    }
  };

  return (
    <nav className="navbar navbar-expand-xl shadow sticky-top p-2 py-3" style={{ backgroundColor: "white", width: "100%" }}>
      <div className="container-fluid d-flex px-0">
        <Link className="navbar-brand" to="/">
          <img className="navbar-img" src="/imgs/Logo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler shadow-none border-none pe-3"
          style={{ border: "0", backgroundColor: "transparent" }}
          type="button"
          onClick={toggleNavbar} // Handle manually
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
<span className={`toggle-icon ${isOpen ? "rotate" : ""}`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </span>        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          ref={navbarCollapseRef}
          style={{ backgroundColor: "white", width: "100%", textAlign: "start" }}
        >
          <div className="navbar-nav ms-auto px-2 pt-2">
          <Link className="nav-link" to="/#hero_section" >
              Home
            </Link>
            <Link className="nav-link" to="/about-us#about_section" >
              About Us
            </Link>
            <Link className="nav-link" to="/our-programs#our_program_section">
              Our Programs
            </Link>
            <Link className="nav-link" to="/contact-us#contact_section">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
