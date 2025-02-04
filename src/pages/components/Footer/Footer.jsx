import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="About_Us">
        <h6>About Us</h6>
        <p>How it Works</p>
        <p>Our Programms</p>
        <p>Education Patners</p>
      </div>

      <div className="Explore">
        <h6>Explore</h6>
        <p>Home</p>
        <p>About</p>
        <p>Course</p>
        <p>Contact</p>
      </div>

      <div className="Support">
        <h6>Support</h6>
        <p>Need any help ?</p>
        <p>info@iqbridge.com</p>
      </div>

      <div className="Follow_Us">
        <h6>Follow Us</h6>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>

      <div className="Contact_Us">
        <h6>Contact Us</h6>
        <p><strong>Email : </strong>contact@iqbridge.com</p>
        <p><strong>Phone : </strong>+91-9990467544</p>
      </div>
    </div>
  )
}
