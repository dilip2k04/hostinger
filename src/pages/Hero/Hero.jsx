import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero_section">
      <div className="row g-0">
        <div className="col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center">
          {" "}
          <div className="hero_content">
            <h1>
              Empowering <br />
              Excellence
            </h1>
            <h4>
              Personalized Online CBSE Tuition for <br />
              Grades 3-9 in the GSC
            </h4>
            <div className="hero_buttons d-flex">
              <a className="book_button btn" href="#contact_us_content">Book a Demo</a>
              <a
                className="explore_us btn d-flex justify-content-center align-items-center"
                id="button"
                href="#about_content"
              >
                Explore Us &nbsp;&nbsp;
                <RiArrowRightDoubleLine />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center">
          <div className="image_section">
            
            <img src="/imgs/hero_main_pic2.png" className="main_image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
