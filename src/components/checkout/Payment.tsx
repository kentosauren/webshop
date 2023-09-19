import React from "react";
import { useNavigate } from "react-router-dom";

const Payment: React.FC = () => {
  const navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate("/checkout/shipping");
  };

  const goToNextStep = () => {
    navigate("/checkout/confirmation");
  };

  return (
    <div>
      <h1>Payment</h1>
      {/* Your form fields and other UI elements go here */}

      <div className="button-container">
        <button onClick={goToPreviousStep}>Previous</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Payment;
