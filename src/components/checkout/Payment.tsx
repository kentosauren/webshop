import React from "react";
import "./CSS/Payment.css";
import PaymentComponent from "./PaymentComponent";

const Payment: React.FC = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Betaling</h3>
      <div className="text1">Alle transaksjoner er sikre og krypterte.</div>
      <PaymentComponent />
    </div>
  );
};

export default Payment;
