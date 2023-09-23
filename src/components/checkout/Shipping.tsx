import React, { useState } from "react";
import "./CSS/Shipping.css";

const Shipping: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

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
            onChange={() => setSelectedMethod("free")}
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
            onChange={() => setSelectedMethod("premium")}
          />
          <div className="method-text-wrapper">
            Forsikret frakt + hopp over køen (behandle bestillingen min først)
          </div>
          <span className="method-amount">Kr 39</span>
        </label>
      </div>
    </>
  );
};

export default Shipping;
