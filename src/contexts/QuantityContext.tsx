import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuantityContextProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityContext = createContext<QuantityContextProps | null>(null);

export const useQuantity = () => {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error("useQuantity must be used within a QuantityProvider");
  }
  return context;
};

interface QuantityProviderProps {
  children: ReactNode;
}

export const QuantityProvider: React.FC<QuantityProviderProps> = ({
  children,
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};
