import React from 'react';

function Slider({ label, value, min, max, onChange }) {
  return (
    <div className="slider">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <span>{value < 10 ? `0${value}` : value}</span>
    </div>
  );
}

export default Slider;