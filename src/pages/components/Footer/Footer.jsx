import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone , FaMailBulk} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='Footer d-flex flex-column flex-md-row justify-content-around gap-5 py-5'>
      <div className="About_Us">
        <h6>About Us</h6>
        <a href='#our_process'>How it Works</a>
        <a href='#our_program'>Our Programs</a>
        <a href='#'>Education Partners</a>
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
        <p><a className='m-0' href="mailto:info@iqbridge.com">info@iqbridge.com</a></p>
      </div>

      <div className="Follow_Us">
        <h6>Follow Us</h6>
        <p><span className='ms-2'><FaFacebook/></span> Facebook </p>
        <p><span className='ms-2'><FaInstagram/></span> Instagram </p>
        <p><span className='ms-2'><FaLinkedin/></span> LinkedIn </p>
      </div>

      <div className="Contact_Us">
        <h6>Contact Us</h6>
        <p className='d-flex gap-2'><span className='ms-2'><FaMailBulk /></span><a href="mailto:contact@iqbridge.com" className="m-0">contact@iqbridge.com</a></p>
        <p className='d-flex gap-2'><span className='ms-2'><FaPhone /></span><a href="tel:+91-9990467544" className="m-0">+91-9990467544</a></p>
      </div>
    </div>
  )
}
