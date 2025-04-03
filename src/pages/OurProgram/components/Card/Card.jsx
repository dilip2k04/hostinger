import React from "react";
import './Card.css';


export default function Card({ title, img, link }) {
  return (
    <div className="" id="cards-container">
      <div className="sub_Card  shadow-lg d-inline-flex flex-column justify-content-center align-items-center gap-3 rounded-5" data-aos="fade-right" data-aos-duration="1500" >
        <h4>{title}</h4>
        <img src={img} alt=""  width={170} height={170} />
      </div>
    </div>
  );
}
