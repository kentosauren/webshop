import React from "react";
import { useNavigate } from "react-router-dom";

const Shipping: React.FC = () => {
  const navigate = useNavigate();

  const goToPreviousStep = () => {
    // Navigate to the sales basket step
    navigate("/checkout/deliveryInfo");
  };

  const goToNextStep = () => {
    // Navigate to the sales basket step
    navigate("/checkout/Payment");
  };

  return (
    <div>
      <h1>Fraktmetode</h1>
      {/* Your form fields and other UI elements go here */}

      <div className="button-container">
        <button onClick={goToPreviousStep}>Previous</button>
        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Shipping;
