import React from "react";

export default function Testimonial() {
  return (
    <div
      className="card p-3 mt-3"
      style={{ width: "auto", maxWidth: "700px", height: "150px", border: '1px solid black' }}
    >
      <div className="card-body row g-0 p-2">
        <div className="col-3">
          <img
            src="/imgs/teaching1.png"
            style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="col-9">
          <strong>Name of the reviewer</strong>
          <div className="review_content my-3">
            Magni sint eius molestiae. Ut aut, labore aperiam eum, est dolores
            ullam tempora quae veritatis dignissimos harum voluptatibus esse
            impedit qui magnam?
          </div>
        </div>
      </div>
    </div>
  );
}
