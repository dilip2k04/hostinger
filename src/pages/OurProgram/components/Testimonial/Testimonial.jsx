import React from "react";

export default function Testimonial({ testimonial }) {
  return (
    <div
      className="card testimonial_card p-3 pb-0 mt-3"
      style={{
        width: "auto",
        maxWidth: "100%",
        height: "100%",
        maxHeight: 'auto',
        boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.3)",
        border: "0px solid black",
        borderRadius: "15px",
        marginRight: "5px",
        marginLeft: "5px",
      }}
    >
      <div className="card-body row g-0 p-2 w-100">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img
            src="/imgs/google_logo.png"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "0",
              marginTop: "20px",
              position:"absolute",
              top:'4px',
              right:"4px"
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
