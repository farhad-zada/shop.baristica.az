// TextArea.js
import React from 'react';
import './customTextArea.css';

const CustomTextArea = ({ name,value, onChange, placeholder }) => {
  return (
    <div className="text-area-container">
      <textarea
        className="custom-text-area"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextArea;
