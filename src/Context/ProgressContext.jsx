import React, { createContext, useState, useContext } from 'react'; 

const DataContext = createContext();

export const useData = () => useContext(DataContext); 

const ProgressContext = ({ children }) => {
  const [progress, setProgress] = useState(0); 
  return (
    <DataContext.Provider value={{ progress, setProgress }}>
      {children}
    </DataContext.Provider>
  );
};

export default ProgressContext;
