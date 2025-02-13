import React from 'react'
import './Navbar.css'



export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg shadow p-3 fixed-top" style={{backgroundColor: 'white'}}>
  <div className="container-fluid d-flex">
    <a className="navbar-brand" href="#"><img src="/src/assets/Logo.png" style={{height: '80px', width: '100%', objectFit: 'contain'}} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" htmlFor="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link mx-3" aria-current="page" href="#home_content">Home</a>
        <a className="nav-link mx-3" href="#about_content">About Us</a>
        <a className="nav-link mx-3" href="#our_program_content">Our Programs</a>
        <a className="nav-link mx-3" href='#contact_us_content'>Contact Us</a>
      </div>
    </div>
  </div>
</nav>  )
}
