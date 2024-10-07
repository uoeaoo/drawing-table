import React from 'react';
import GridCol from './GridCol';

function GridRow({ row, rowIndex, handleMouseDown, handleMouseEnter }) {
  return (
    <div className="gridRow">
      {row.map((cell, colIndex) => (
        <GridCol
          key={colIndex}
          cell={cell}
          rowIndex={rowIndex}
          colIndex={colIndex}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
}

export default GridRow;