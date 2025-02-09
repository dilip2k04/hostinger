import React from "react";
import "./Accordion.css";

export default function Accordion({ question, answer, id }) {
  return (
    <div className="accordion p-2 shadow-none" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            style={{border: '1px solid black'}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`} 
            aria-expanded="true"
            aria-controls={id}
          >
            <span className="button_text">            {question}
            </span>
            
          </button>
        </h2>
        <div
          id={id}
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample" 
        >
          <div className="accordion-body">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
