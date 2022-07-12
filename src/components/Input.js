import React from "react";

const Input = ({ label, onChange, text }) => {
  return (
    <div className="input-search ui form">
      <div className="field">
        <label>{label}</label>
        <input
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
