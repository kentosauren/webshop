import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import DeliveryInfo from "../DeliveryInfo"; // Assume you have this component
import Payment from "../Payment"; // Assume you have this component
import Shipping from "../Shipping"; // Assume you have this component
import Breadcrumb from "./Breadcrumb"; // Assume you have this component
import { useState } from "react";

function CheckoutWizard() {
  const [currentStep, setCurrentStep] = useState(2);

  const handleNext = () => {
    // Add logic to go to the next step
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    // Add logic to go to the previous step
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <Breadcrumb onNext={handleNext} currentStep={currentStep} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/deliveryInfo" element={<DeliveryInfo />} />
          <Route path="/shipping" element={<Shipping />} />

          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </>
  );
}

export default CheckoutWizard;
