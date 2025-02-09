import React from "react";
import './Card.css';


export default function Card({ title, img, link }) {
  return (
    <div className="">
      <div className="sub_Card d-inline-flex flex-column justify-content-center align-items-center gap-3 rounded-5">
        <h4>{title}</h4>
        <img src={img} alt="" width={185} height={185} />
        <a href={link} className="btn">
          Get Started
        </a>
      </div>
    </div>
  );
}
