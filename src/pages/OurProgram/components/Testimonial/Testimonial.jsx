import React from "react";

export default function Testimonial({ testimonial }) {
  return (
    <div
      className="card p-3 pb-0 mt-3"
      style={{
        width: "auto",
        maxWidth: "600px",
        height: "auto",
        boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.3)",
        border: "0px solid black",
        borderRadius: "15px",
        marginRight: "5px",
        marginLeft: "5px",
      }}
    >
      <div className="card-body row g-0 p-2">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img
            src="/imgs/TestimonialPic.png"
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "0",
              marginTop: "20px",
            }}
            alt=""
          />
        </div>
        <div className="col-9 ps-4 text-start" id="Testimonial_Card">
          <div className="review_content my-3">
           “{testimonial.review}”
          </div>
          <div>
            <strong>Rating: </strong> {testimonial.rating}
          </div>
          <strong className="h5">-{testimonial.name} , {testimonial.role}</strong>
        </div>
      </div>
    </div>
  );
}
