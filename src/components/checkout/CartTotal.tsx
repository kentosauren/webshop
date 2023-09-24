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
    navigate("/checkout");
  };

  return (
    <div className="checkout">
      <div className="delsum">
        <span>Delsum</span>
        <span>
          {" "}
          {totalPrice.toLocaleString("nb-NO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
        </span>
      </div>
      <hr />
      <div className="frakt">
        <span>Gratis Frakt</span>
      </div>
      <div className="sjekkut">
        <button onClick={goToNextStep}>
          {" "}
          {"SJEKK UT  -  " +
            totalPrice.toLocaleString("nb-NO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          Kr
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
