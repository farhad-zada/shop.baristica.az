// CustomCheckbox.js
import React from 'react';
import './customCheckbox.css';

const CustomCheckbox = ({ checked, onChange, label }) => {
  return (
    <label className="custom-checkbox white">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
