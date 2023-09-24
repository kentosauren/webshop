// Checkout.tsx

import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Shipping from "./Shipping";
import OrderReview from "./OrderReview";
import Payment from "./Payment";
import "./CSS/Checkout.css";

const Checkout: React.FC = () => {
  const [shippingAmount, setShippingAmount] = useState<number>(0); // Initialize to 0 or any default value

  return (
    <>
      <div className="outerContainer">
        <DeliveryInfo />
        <hr className="custom-hr" />
        <Shipping setShippingAmount={setShippingAmount} />
        <hr className="custom-hr" />
        <Payment />
        <hr className="custom-hr" />
        <OrderReview shippingAmount={shippingAmount} />
      </div>
    </>
  );
};

export default Checkout;
