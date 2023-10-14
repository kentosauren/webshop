import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./css/PaymentForm.css"; // Import your custom CSS

const PaymentForm = () => {
  const price = 1199;
  const shipping = 50;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(0);

  // Initialize quantity from localStorage
  useEffect(() => {
    const storedQuantity = localStorage.getItem("itemQuantity");
    if (storedQuantity) {
      setQuantity(Number(storedQuantity));
    }
  }, []);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: any) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // Step 1: Create Payment Intent
    let clientSecret = null;
    try {
      const response = await createPaymentIntent(price * quantity + shipping); // Pass the amount
      if (response.ok) {
        const data = await response.json();
        clientSecret = data.clientSecret;
      } else {
        throw new Error("Failed to create payment intent");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return;
    }

    // Step 2: Confirm Card Payment using clientSecret
    const cardElement = elements.getElement(CardNumberElement);
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement as any,
      },
    });

    // Interpret the outcome of the payment attempt
    if (result.error) {
      // Payment failed
      alert(`Payment failed: ${result.error.message}`);
    } else if (
      result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      // Payment succeeded
      console.log("Payment succeeded:", result);
      navigate("/confirmation");
    } else {
      // Other payment statuses like 'requires_action' or 'requires_payment_method'
      alert(`Payment status: ${result.paymentIntent?.status}`);
    }
  };

  // Modify createPaymentIntent function to return fetch promise
  const createPaymentIntent = async (amount: number) => {
    const url = "http://localhost:3001/api/create-payment-intent";
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    };
    return fetch(url, payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header-row">
        <h6>Bankkort</h6>
        <img src="src/assets/img/paymentCards2.png" alt="Visa, Mastercard" />
      </div>
      <div className="form-group">
        <label>Navn på kort</label>
        <input
          className="form-control"
          type="text"
          placeholder="Navn på kort"
          required
        />
      </div>
      <div className="form-group">
        <label>Kortnummer</label>
        <CardNumberElement onChange={handleChange} />
      </div>
      <div className="row">
        <div className="col">
          <label>Utløpsdato</label>
          <CardExpiryElement onChange={handleChange} />
        </div>
        <div className="col">
          <label>Sikkerhetskode</label>
          <CardCvcElement onChange={handleChange} />
        </div>
      </div>
      <br />

      {error && <div className="error">{error}</div>}
      <button className="payNowButton" type="submit" disabled={!stripe}>
        <b>BETAL NÅ</b>
      </button>
    </form>
  );
};

export default PaymentForm;
