import React from "react";

interface Props {
  nextStep: () => void;
}

const ShoppingBasket: React.FC<Props> = ({ nextStep }) => {
  return (
    <div>
      <h2>Handlekurv</h2>
      {/* Your shopping basket logic here */}
      <button onClick={nextStep}>Neste</button>
    </div>
  );
};

export default ShoppingBasket;
