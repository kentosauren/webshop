import React, { useState } from "react";

interface Props {
  prevStep: () => void;
}

const Payment: React.FC<Props> = ({ prevStep }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [errors, setErrors] = useState({ cardNumber: "" });

  const validateForm = () => {
    let valid = true;
    let errors = { cardNumber: "" };

    if (cardNumber.trim() === "" || cardNumber.length !== 16) {
      errors.cardNumber = "Ugyldig kortnummer";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handlePayment = () => {
    if (validateForm()) {
      // Perform payment logic here
      console.log("Payment successful");
    }
  };

  return (
    <div>
      <h2>Betaling</h2>
      <label>Kortnummer:</label>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <div className="error">{errors.cardNumber}</div>
      <button onClick={prevStep}>Forrige</button>
      <button onClick={handlePayment}>Betal</button>
    </div>
  );
};

export default Payment;
