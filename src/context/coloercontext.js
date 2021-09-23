import React, { useState, createContext } from "react";

export const coloercontext = createContext([]);
const Colorp = ({ children }) => {
  const [favoriteColors, setfavoriteColors] = useState([]);
  const [RandomColors, setRandomColors] = useState([]);

  return (
    <coloercontext.Provider
      value={{
        favoriteColors,
        setfavoriteColors,
        RandomColors,
        setRandomColors,
      }}
    >
      {children}
    </coloercontext.Provider>
  );
};

export default Colorp;
