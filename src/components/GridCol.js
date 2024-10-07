import React from 'react';

function GridCol({ cell, rowIndex, colIndex, handleMouseDown, handleMouseEnter }) {
  return (
    <div
      className="gridCol"
      style={{ backgroundColor: cell.color }}
      onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
      onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
    ></div>
  );
}

export default GridCol;