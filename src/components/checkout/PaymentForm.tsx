// PaymentForm.tsx
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

type PaymentFormProps = {
  clientSecret: string | null;
};

const PaymentForm: React.FC<PaymentFormProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement!,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Payment succeeded:", result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
