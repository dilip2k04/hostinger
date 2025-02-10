import React from "react";
import "./BroadCard.css";

export default function BroadCard({
  title,
  content,
  img,
  is_right_pic = false,
}) {
  return (
    <div className="card broad_card shadow-lg" >
      <div className="card-body g-0 row" >
        { !is_right_pic ? (
          <>
            <div className="col-md-3 order-1 order-md-1 d-flex justify-content-center align-items-center">
              <img src={img} className='card_img mb-4' alt="" />
            </div>
            <div className="col-md-9 order-2 order-md-2 d-flex justify-content-center align-items-center flex-column"><h4 className="broad_title">{title}</h4><p className="broad_content">{content}</p></div>
          </>
        ) : (
          <>
            <div className="col-md-9 order-2 order-md-1 d-flex justify-content-center align-items-center  flex-column"><h4 className="broad_title">{title}</h4><p className="broad_content">{content}</p></div>
            <div className="col-md-3 order-1 order-md-2 d-flex justify-content-center align-items-center">
              <img src={img} className='card_img mb-4' alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
