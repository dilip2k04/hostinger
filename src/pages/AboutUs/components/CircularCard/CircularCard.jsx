import React from "react";
import "./CircularCard.css";

export default function CircularCard({ img, title, content,idx }) {
  // const splitted_title = title.split(' ')
  
  return (
    <div className="circular_card_container">
      {idx === 0 ? (
              <h3 className="circular_card_title_with_space">{title}</h3>
      ): (
        <h3 className="circular_card_title">{title}</h3>

      )}
      <div className="card circular_card">
        <div className="card-body">
          <img src={img} className="circular_card_img" alt="" />
        </div>
      </div>
      <p id="card_content">{content}</p>
    </div>
  );
}
