import React from "react";
import "./CSS/OrderItem.css";

interface OrderTotalProps {
  totalPrice: number;
  shippingAmount: number;
  totalAmount: number;
}

const OrderTotal: React.FC<OrderTotalProps> = ({
  totalPrice,
  shippingAmount,
  totalAmount,
}) => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <div className="amount-details d-flex justify-content-between">
          <span className="label">Beløp:</span>
          <span className="amount">
            {totalPrice.toLocaleString("nb-NO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            Kr
          </span>
        </div>
        <div className="amount-details d-flex justify-content-between">
          <span className="label">Frakt:</span>
          <span className="shipping-amount">
            {shippingAmount.toLocaleString("nb-NO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            Kr
          </span>
        </div>
        <div className="amount-details d-flex justify-content-between">
          <span className="label">Totalt:</span>
          <span className="total-amount">
            {" "}
            {totalAmount.toLocaleString("nb-NO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            Kr
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderTotal;
