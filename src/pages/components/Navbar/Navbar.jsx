import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
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

  const closeNavbar = () => {
    if (navbarCollapseRef.current?.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current);
      bsCollapse.hide();
      setIsOpen(false); // Reset icon state
    }
  };

  return (
    <nav className="navbar navbar-expand-xl shadow sticky-top" style={{ backgroundColor: "white", width: "100%" }}>
      <div className="container-fluid d-flex px-0">
        <Link className="navbar-brand" to="/">
          <img className="navbar-img" src="/imgs/Logo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler shadow-none border-0 pe-4 toggle-btn"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className={`toggle-icon ${isOpen ? "rotate" : ""}`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          ref={navbarCollapseRef}
          style={{ backgroundColor: "white", width: "100%", textAlign: "start" }}
        >
          <div className="navbar-nav ms-auto px-4">
            <Link className="nav-link" to="/" onClick={closeNavbar}>
              Home
            </Link>
            <Link className="nav-link" to="/about-us" onClick={closeNavbar}>
              About Us
            </Link>
            <Link className="nav-link" to="/our-programs" onClick={closeNavbar}>
              Our Programs
            </Link>
            <Link className="nav-link" to="/contact-us" onClick={closeNavbar}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
