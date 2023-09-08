// BuyNowButton.tsx
import React from "react";
import "./CSS/BuyNowButton.css";

const BuyNowButton: React.FC = () => {
  return (
    <button className="buy-now-button">
      <span className="icon">🛍️</span>
      <span className="text">KJØP NÅ</span>
    </button>
  );
};

export default BuyNowButton;
