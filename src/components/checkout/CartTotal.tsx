import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Cart.css";

interface Props {
  totalPrice: number;
}

const CartTotal: React.FC<Props> = ({ totalPrice }) => {
  const navigate = useNavigate();

  const goToNextStep = () => {
    // Navigate to the delivery information step
    navigate("/checkout/deliveryInfo");
  };

  return (
    <div className="checkout">
      <div className="delsum">
        <span>Delsum</span>
        <span>{`${totalPrice.toFixed(2)} Kr`}</span>
      </div>
      <hr />
      <div className="frakt">
        <span>Gratis Frakt</span>
      </div>
      <div className="sjekkut">
        <button onClick={goToNextStep}>{`SJEKK UT - ${totalPrice.toFixed(
          2
        )} Kr`}</button>
      </div>
    </div>
  );
};

export default CartTotal;
