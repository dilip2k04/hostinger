import React, { useRef } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

export default function Navbar() {
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = (path, sectionId) => {
    navigate(`${path}?scrollTo=${sectionId}`);

    // Close the navbar if it's open
    if (navbarCollapseRef.current) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-xl shadow sticky-top" style={{ backgroundColor: "white", width: "100%" }}>
      <div className="container-fluid d-flex px-0">
        <Link className="navbar-brand" to="/">
          <img className="navbar-img" src="/imgs/Logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler shadow-none border-none"
          style={{ border: "0", backgroundColor: "transparent" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon me-4"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          ref={navbarCollapseRef}
          style={{ backgroundColor: "white", width: "100%", textAlign: "start" }}
        >
          <div className="navbar-nav ms-auto px-4">
            <Link className="nav-link" to="/#hero_section" onClick={() => handleNavLinkClick("/", "hero_section")}>
              Home
            </Link>
            <Link className="nav-link" to="/about-us#about_section" onClick={() => handleNavLinkClick("/about-us", "about_section")}>
              About Us
            </Link>
            <Link className="nav-link" to="/our-programs#our_program_section" onClick={() => handleNavLinkClick("/our-programs", "our_program_section")}>
              Our Programs
            </Link>
            <Link className="nav-link" to="/contact-us#contact_section" onClick={() => handleNavLinkClick("/contact-us", "contact_section")}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
