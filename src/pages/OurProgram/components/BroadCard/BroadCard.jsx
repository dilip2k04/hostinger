import React from "react";
import "./BroadCard.css";

export default function BroadCard({
  title,
  content,
  img,
  is_right_pic = false,
}) {
  return (
    <div className="card broad_card shadow-lg" data-aos="flip-right" data-aos-duration="2000" >
      <div className="card-body m-0 g-0 row d-sm-flex justify-content-center align-items-center" >
        { !is_right_pic ? (
          <>
            <div className="col-3 order-1 order-lg-1 p-3 d-flex justify-content-center align-items-center">
              <img src={img} className='card_img mb-0' alt="" />
            </div>
            <div className="col-9 order-2 order-lg-2 d-flex justify-content-center align-items-center flex-column"><h4 className="broad_title">{title}</h4><p className="broad_content">{content}</p></div>
          </>
        ) : (
          <>
            <div className="col-9 order-2 order-lg-1 d-flex justify-content-center align-items-center  flex-column"><h4 className="broad_title">{title}</h4><p className="broad_content">{content}</p></div>
            <div className="col-3 order-1 order-lg-2 p-3 d-flex justify-content-center align-items-center">
              <img src={img} className='card_img mb-0' alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
