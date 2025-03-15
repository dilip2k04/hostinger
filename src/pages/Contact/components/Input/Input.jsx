import React from "react";
import "./Input.css";

export default function Input({ label, handleInput, id, value }) {
  const label_splitted = label.split(" ");
  const firstWord = label_splitted[0];
  const secondWord = label_splitted[1] || ""; // Prevents undefined errors

  return (
    <div className="d-flex flex-column input_container">
      <label htmlFor={id} className="label">
        {firstWord} {secondWord && <span className="label_second">{secondWord}</span>}
      </label>
      <input
        type="text"
        onChange={handleInput}
        value={value}
        id={id}
        placeholder={`Enter ${label}`}
        className="input_field"
      />
    </div>
  );
}
