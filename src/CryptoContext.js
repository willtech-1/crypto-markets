import React, { useState, useEffect } from "react";
import { useContext } from "react";

import { createContext } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("ZAR");
  const [symbol, setSymbol] = useState("R");

  useEffect(() => {
    if (currency === "ZAR") setSymbol("R");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
