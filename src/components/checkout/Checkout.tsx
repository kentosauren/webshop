import React, { useState, useEffect } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Shipping from "./Shipping";
import OrderReview from "./OrderReview";
import Payment from "./Payment";
import "./CSS/Checkout.css";

const Checkout: React.FC = () => {
  return (
    <>
      <div className="outerContainer">
        <DeliveryInfo />
        <hr className="custom-hr" />
        <Shipping />
        <hr className="custom-hr" />
        <Payment />
        <hr className="custom-hr" />
        <OrderReview />
      </div>
    </>
  );
};

export default Checkout;
