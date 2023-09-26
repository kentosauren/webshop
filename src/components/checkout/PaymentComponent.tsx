// PaymentComponent.tsx
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"; // Import the PaymentForm component

const stripePromise = loadStripe("your_stripe_publishable_key_here");

const PaymentComponent: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const createPaymentIntent = async (amount: number) => {
    const url = "http://localhost:3001/api/create-payment-intent";
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    };

    try {
      const response = await fetch(url, payload);
      if (response.ok) {
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } else {
        throw new Error("Failed to create payment intent");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div>
        <button onClick={() => createPaymentIntent(1000)}>
          Create Payment Intent
        </button>
        <PaymentForm clientSecret={clientSecret} />
        {clientSecret && <div>Client Secret: {clientSecret}</div>}
      </div>
    </Elements>
  );
};

export default PaymentComponent;
