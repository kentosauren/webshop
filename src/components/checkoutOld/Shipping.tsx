import React, { useState } from "react";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Shipping: React.FC<Props> = ({ nextStep, prevStep }) => {
  const [shippingOption, setShippingOption] = useState("");
  const [errors, setErrors] = useState({ shippingOption: "" });

  const validateForm = () => {
    let valid = true;
    let errors = { shippingOption: "" };

    if (shippingOption.trim() === "") {
      errors.shippingOption = "Fraktalternativ er påkrevd";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Frakt</h2>
      <label>Fraktalternativ:</label>
      <select
        value={shippingOption}
        onChange={(e) => setShippingOption(e.target.value)}
      >
        <option value="">Velg</option>
        <option value="standard">Standard</option>
        <option value="express">Ekspress</option>
      </select>
      <div className="error">{errors.shippingOption}</div>
      <button onClick={prevStep}>Forrige</button>
      <button onClick={handleNext}>Neste</button>
    </div>
  );
};

export default Shipping;
