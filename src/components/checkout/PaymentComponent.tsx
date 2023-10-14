import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"; // Import the PaymentForm component

const stripePromise = loadStripe(
  "pk_test_51JZuvIFbv1zQH8DcagujzC8y1Bc194OIwfNHcuTkXDUDMfgF2H9ogdfxSu1XtwZROxIbJnKEtPxY6nLht184XPTG00Sav6EPJ6"
);

const PaymentComponent: React.FC = () => {
  // const [clientSecret, setClientSecret] = useState<string | null>(null);

  return (
    <Elements stripe={stripePromise}>
      <img className="vipps" src="src/assets/img/vippsbetalmed.png" alt="" />
      <hr />

      <div>
        {/* <button onClick={() => createPaymentIntent(1000)}>
          Create Payment Intent

        </button> */}
        <PaymentForm />
        {/* {clientSecret && <div>Client Secret: {clientSecret}</div>} */}
      </div>
    </Elements>
  );
};

export default PaymentComponent;
