import React from 'react';
import GridRow from './GridRow';

function Grid({ grid, handleMouseDown, handleMouseEnter }) {
  return (
    <div className="container">
      {grid.map((row, rowIndex) => (
        <GridRow
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
}

export default Grid;