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

const PaymentForm = ({ clientSecret }: { clientSecret: string | null }) => {
  const price = 1199;
  const shipping = 50;
  const navigate = useNavigate();

  //   const ELEMENT_OPTIONS = {
  //     style: {
  //       base: {
  //         backgroundColor: "white",
  //         color: "#32325d",

  //         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //         fontSmoothing: "antialiased",
  //         fontSize: "20px",
  //         lineHeight: "40px", // to increase the height
  //         padding: "10px", // to add space around the text
  //         border: "1px solid grey", // to add a border
  //         borderRadius: "5px", // to add rounded corners

  //         "::placeholder": {
  //           color: "#aab7c4",
  //         },
  //       },
  //       invalid: {
  //         color: "#fa755a",
  //         iconColor: "#fa755a",
  //         borderColor: "red",
  //       },
  //     },
  //   };

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

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Payment succeeded
      console.log("Payment succeeded:", result);
      navigate("/confirmation");
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
      <div className="form-group">
        <label>Kortnummber, qty: {quantity}</label>
        <CardNumberElement onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Utløpsdato</label>
        <CardExpiryElement onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Sikkerhetskode</label>
        <CardCvcElement onChange={handleChange} />
      </div>

      {error && <div className="error">{error}</div>}
      <button className="payNowButton" type="submit" disabled={!stripe}>
        <b>BETAL NÅ</b>
      </button>
    </form>
  );
};

export default PaymentForm;
