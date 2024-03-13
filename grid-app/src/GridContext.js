import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const adjustCounter = (amount) => {
    setCounter((prevCounter) => prevCounter + amount);
  };

  return (
    <GridContext.Provider value={{ counter, adjustCounter }}>
      {children}
    </GridContext.Provider>
  );
};
