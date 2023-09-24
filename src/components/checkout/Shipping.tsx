import React, { useState } from "react";
import "./CSS/Shipping.css";

interface ShippingProps {
  setShippingAmount: (amount: number) => void;
}

const Shipping: React.FC<ShippingProps> = ({ setShippingAmount }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("free");
  const amountShippingFree = 0;
  const amountShippingPlus = 39;

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method);

    if (method === "free") {
      setShippingAmount(amountShippingFree);
    } else {
      setShippingAmount(amountShippingPlus);
    }
  };

  return (
    <>
      <h3>Fraktmetode</h3>
      <div className="shipping-method">
        <label
          className={`method-option ${
            selectedMethod === "free" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="shipping"
            value="free"
            checked={selectedMethod === "free"}
            onChange={() => handleMethodChange("free")}
          />
          <div className="method-text-wrapper">Gratis sporbar frakt</div>
          <span className="method-amount">Gratis</span>
        </label>
        <label
          className={`method-option ${
            selectedMethod === "premium" ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="shipping"
            value="premium"
            checked={selectedMethod === "premium"}
            onChange={() => handleMethodChange("premium")}
          />
          <div className="method-text-wrapper">
            Forsikret frakt + hopp over køen (behandle bestillingen min først)
          </div>
          <span className="method-amount">Kr {amountShippingPlus}</span>
        </label>
      </div>
    </>
  );
};

export default Shipping;
