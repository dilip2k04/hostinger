import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg shadow p-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">IQ Bridge</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" htmlFor="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link mx-3" aria-current="page" href="#">Home</a>
        <a className="nav-link mx-3" href="#">About Us</a>
        <a className="nav-link mx-3" href="#">Our Programs</a>
        <a className="nav-link mx-3" href='#'>Contact Us</a>
      </div>
    </div>
  </div>
</nav>  )
}
