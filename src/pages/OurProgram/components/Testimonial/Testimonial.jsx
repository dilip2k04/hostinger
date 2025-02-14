import React from "react";

export default function Testimonial() {
  return (
    <div
      className="card p-3 mt-3"
      style={{ width: "auto", maxWidth: "600px", height: "150px", boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.3)" , border:"0px solid black" , borderRadius:"15px", marginRight: "5px",marginLeft: "5px" }}
    >
      <div className="card-body row g-2 p-2">
        <div className="col-3">
          <img
            src="/imgs/TestimonialPic.png"
            style={{ height: "80px", width: "80px", borderRadius: "0", marginTop: '20px' }}
            alt=""
          />
        </div>
        <div className="col-9 text-start" id="Testimonial_Card">
          <div className="review_content my-3 h3">
          “ IQ Bridge Has Transformed My Childs Academic Percentage ”
          </div>
          <strong className="h5">-Mrs.Fatima , Dubai</strong>
        </div>
      </div>
    </div>
  );
}
