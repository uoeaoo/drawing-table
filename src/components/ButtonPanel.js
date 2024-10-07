import React from 'react';

function ButtonPanel({ onCreateGrid, onClearGrid, color, setColor, erase, toggleErase }) {
  return (
    <div className="options-wrapper">
      <button onClick={onCreateGrid}>Create Grid</button>
      <button onClick={onClearGrid}>Clear Grid</button>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        onClick={() => toggleErase(true)}
        style={{ backgroundColor: erase ? '#d9534f' : '' }}
      >
        Erase
      </button>
      <button
        onClick={() => toggleErase(false)}
        style={{ backgroundColor: !erase ? '#d9534f' : '' }}
      >
        Paint
      </button>
    </div>
  );
}

export default ButtonPanel;