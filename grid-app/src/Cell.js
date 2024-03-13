import React, { useState, useContext } from 'react';
import { GridContext } from './GridContext';

const Cell = () => {
  const [isActive, setIsActive] = useState(false);
  const { adjustCounter } = useContext(GridContext);

  const toggleCell = () => {
    setIsActive(!isActive);
    adjustCounter(isActive ? -1 : 1);
  };

  return (
    <div
      onClick={toggleCell}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isActive ? 'black' : 'white',
        cursor: 'pointer',
      }}
    />
  );
};

export default Cell;
