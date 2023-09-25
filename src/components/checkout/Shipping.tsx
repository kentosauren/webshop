import React, { useState, useEffect } from "react";
import "./CSS/Shipping.css";

interface ShippingProps {
  setShippingAmount: (amount: number) => void;
}

const Shipping: React.FC<ShippingProps> = ({ setShippingAmount }) => {
  // Initialize selectedMethod from localStorage or set it to 'free'
  const initialMethod = localStorage.getItem("selectedMethod") || "free";

  const [selectedMethod, setSelectedMethod] = useState<string>(initialMethod);
  const amountShippingFree = 0;
  const amountShippingPlus = 39;

  useEffect(() => {
    // Save selectedMethod to localStorage
    localStorage.setItem("selectedMethod", selectedMethod);
  }, [selectedMethod]);

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
