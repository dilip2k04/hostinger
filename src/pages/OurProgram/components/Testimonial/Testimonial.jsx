import React from "react";

export default function Testimonial({ testimonial }) {

  const testing = true;

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <div>
        {Array.from({ length: totalStars }, (_, i) => (
          <span key={i} style={{ color: i < rating ? "gold" : "gray", fontSize: "20px" }}>
            ★
          </span>
        ))}
      </div>
    );
  };


  if(!testing){
    return (
      <div
        className="card testimonial_card p-3 pb-0 mt-3 "
        style={{
          width: "auto",
          maxWidth: "100%",
          height: "100%",
          maxHeight: '200px',
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

  return (
    <div className="card h-100 p-3 p-md-1">
      <div className="card-body">
     <div className="d-flex justify-content-start align-items-center">
     <img
              src="/imgs/google_logo.png"
              style={{
                height: "30px",
                width: "30px",
                borderRadius: "0",
                top:'4px',
                right:"4px"
              }}
              alt=""
            />
        
     <div className="h5 mx-3">{testimonial.review}</div>
     </div>
     <div className="testimonial-content" style={{fontSize: '14px', marginLeft: '40px'}}>
    <div> <StarRating rating={testimonial.rating} /></div>
    <h6 className="ms-3 mt-2" style={{fontSize: '14px',justifyContent:'flex-end'}}>{testimonial.name}</h6>
     </div>
      </div>
    </div>
  )


}
