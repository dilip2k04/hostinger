import React from "react";
import "./CircularCard.css";
export default function CircularCard({ img, title, content }) {
  return (
    <div className="circular_card_container">
      <h3>{title}</h3>
      <div className="card circular_card">
        <div className="card-body">
          <img src={img} className="circular_card_img" alt="" />
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
}
