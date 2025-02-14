import React from 'react'
import './Navbar.css'



export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg py-3 shadow fixed-top" style={{backgroundColor: 'white', width: '100%'}}>
  <div className="container-fluid d-flex">
    <a className="navbar-brand" href="#"><img src="/src/assets/Logo.png" style={{height: '60px', width: '100%', objectFit: 'contain'}} alt="" /></a>
    <button className="navbar-toggler shadow-none border-none" style={{border: '0', backgroundColor: 'transparent'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link mx-3" aria-current="page" href="#home">Home</a>
        <a className="nav-link mx-3" href="#about_Us">About Us</a>
        <a className="nav-link mx-3" href="#our_program">Our Programs</a>
        <a className="nav-link mx-3" href='#contact_us'>Contact Us</a>
      </div>
    </div>
  </div>
</nav>  )
}
