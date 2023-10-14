import React, { useState, useRef } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Shipping from "./Shipping";
import OrderReview from "./OrderReview";
import Payment from "./Payment";
import "./CSS/Checkout.css";

const Checkout: React.FC = () => {
  const [shippingAmount, setShippingAmount] = useState<number>(0);
  const [isDeliveryInfoSubmitted, setIsDeliveryInfoSubmitted] = useState(false);
  const shippingRef = useRef<HTMLDivElement>(null);
  const deliveryInfoRef = useRef<HTMLDivElement>(null); // <-- Create a ref for DeliveryInfo

  const [isDeliveryInfoEditable, setIsDeliveryInfoEditable] = useState(true);

  const handleDeliveryInfoSubmit = () => {
    setIsDeliveryInfoSubmitted(true);
    setIsDeliveryInfoEditable(false);

    if (shippingRef.current) {
      const topPosition =
        shippingRef.current.getBoundingClientRect().top + window.scrollY - 10;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const handleDeliveryInfoClick = () => {
    setIsDeliveryInfoEditable(true);

    // Scroll to the top of the DeliveryInfo component
    if (deliveryInfoRef.current) {
      const topPosition =
        deliveryInfoRef.current.getBoundingClientRect().top +
        window.scrollY -
        70;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="outerContainer">
        <div
          ref={deliveryInfoRef} // <-- Set the ref here
          onClick={handleDeliveryInfoClick}
          className={isDeliveryInfoEditable ? "" : "disabled-section"}
        >
          <DeliveryInfo
            onSubmit={handleDeliveryInfoSubmit}
            isEditable={isDeliveryInfoEditable}
            setEditable={setIsDeliveryInfoEditable}
          />
        </div>
        {isDeliveryInfoSubmitted && !isDeliveryInfoEditable && (
          <button onClick={handleDeliveryInfoClick}>Endre</button>
        )}

        <hr className="custom-hr" />
        <div
          ref={shippingRef}
          className={isDeliveryInfoEditable ? "disabled-section" : ""}
        >
          <Shipping setShippingAmount={setShippingAmount} />
          <hr className="custom-hr" />
          <OrderReview shippingAmount={shippingAmount} />
          <hr className="custom-hra" />
          <Payment />
        </div>
      </div>
    </>
  );
};

export default Checkout;
