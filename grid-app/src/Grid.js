import React, { useContext } from 'react';
import Cell from './Cell';
import { GridContext, GridProvider } from './GridContext';

const Grid = () => {
  const { counter } = useContext(GridContext);

  return (
    <div>
      <h2>Count: {counter}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '2px', backgroundColor: 'grey', padding: '2px' }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

const GridWithProvider = () => (
  <GridProvider>
    <Grid />
  </GridProvider>
);

export default GridWithProvider;
