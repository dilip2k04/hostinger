import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='Footer d-flex flex-column flex-md-row justify-content-around gap-5 py-5'>
      <div className="About_Us">
        <h6>About Us</h6>
        <p>How it Works</p>
        <p>Our Programms</p>
        <p>Education Patners</p>
      </div>

      <div className="Explore">
        <h6>Explore</h6>
        <a  href='#home'>Home</a>
        <a href='#about_Us'>About</a>
        <a href='#Courses'>Course</a>
        <a href='#contact_us'>Contact</a>
      </div>

      <div className="Support">
        <h6>Support</h6>
        <p>Need any help ?</p>
        <p>info@iqbridge.com</p>
      </div>

      <div className="Follow_Us">
        <h6>Follow Us</h6>
        <p>Facebook <span className='ms-2'><FaFacebook/></span></p>
        <p>Instagram <span className='ms-2'><FaInstagram/></span></p>
        <p>LinkedIn <span className='ms-2'><FaLinkedin/></span></p>
      </div>

      <div className="Contact_Us">
        <h6>Contact Us</h6>
        <p><strong>Email : </strong>contact@iqbridge.com</p>
        <p><strong>Phone : </strong>+91-9990467544</p>
      </div>
    </div>
  )
}
