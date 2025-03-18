import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion({ question, answer, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <div className="accordion p-3 shadow-none">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${isOpen ? "" : "collapsed"}`} 
              type="button"
              onClick={toggleAccordion}
              aria-expanded={isOpen}
              aria-controls={id}
            >
              <span className="button_text">{question}</span>
            </button>
          </h2>
          <div id={id} className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
            <div className="accordion-body">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
