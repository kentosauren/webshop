//CheckoutWizard.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Route, Routes, Link } from "react-router-dom";

import ShoppingBasket from "./ShoppingBasket";
import DeliveryInformation from "./DeliveryInformation";
import Shipping from "./Shipping";
import Payment from "./Payment";

const CheckoutWizard: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="./">Handlekurv</Link>
          </li>
          <li>
            <Link to="./information">Informasjon</Link>
          </li>
          <li>
            <Link to="./shipping">Frakt</Link>
          </li>
          <li>
            <Link to="./payment">Betaling</Link>
          </li>
        </ul>
      </nav>
      <h1>Webshop Checkout</h1>
      <div>
        {step === 1 && <ShoppingBasket nextStep={nextStep} />}
        {step === 2 && (
          <DeliveryInformation nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && <Shipping nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Payment prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default CheckoutWizard;
