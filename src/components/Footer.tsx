import React from "react";
import "./CSS/Footer.css"; // Make sure to create this CSS file
//
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <span>Copyright © 2023 Metago.no</span>
      </div>
      <div className="footer-right">
        <img src="./src/assets/img/paymentCards.png" alt="Copyright Symbol" />
      </div>
    </div>
  );
};

export default Footer;
