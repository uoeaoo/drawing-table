import React, { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import Grid from './components/Grid';
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);
  const [color, setColor] = useState('#000000');
  const [erase, setErase] = useState(false);
  const [grid, setGrid] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const createGrid = () => {
    const newGrid = [];
    for (let i = 0; i < gridHeight; i++) {
      const row = [];
      for (let j = 0; j < gridWidth; j++) {
        row.push({ color: 'transparent' });
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const handleMouseDown = (rowIndex, colIndex) => {
    setIsDrawing(true);
    updateCellColor(rowIndex, colIndex);
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (isDrawing) {
      updateCellColor(rowIndex, colIndex);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const updateCellColor = (rowIndex, colIndex) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex].color = erase ? 'transparent' : color;
    setGrid(newGrid);
  };

  const clearGrid = () => {
    setGridWidth(0);
    setGridHeight(0);
    setGrid([]);
  };

  const toggleErase = (eraseMode) => {
    setErase(eraseMode);
  };

  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <div className="wrapper">
        <div className="options">
          <div className="options-wrapper">
            <Slider
              label="Grid Width"
              value={gridWidth}
              min="1"
              max="35"
              onChange={(e) => setGridWidth(Number(e.target.value))}
            />
            <Slider
              label="Grid Height"
              value={gridHeight}
              min="1"
              max="35"
              onChange={(e) => setGridHeight(Number(e.target.value))}
            />
          </div>
          <ButtonPanel
            onCreateGrid={createGrid}
            onClearGrid={clearGrid}
            toggleErase={toggleErase}
            erase={erase}
            color={color}
            setColor={setColor}
          />
        </div>
        <Grid
          grid={grid}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
}

export default App;