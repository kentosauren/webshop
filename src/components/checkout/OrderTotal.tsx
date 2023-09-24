import React from "react";

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
      <div className="amount-details d-flex justify-content-between">
        <span className="label">Amount:</span>
        <span className="amount">
          {totalPrice.toLocaleString("nb-NO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          Kr
        </span>
      </div>
      <div className="amount-details d-flex justify-content-between">
        <span className="label">Shipping Amount:</span>
        <span className="shipping-amount">
          {shippingAmount.toLocaleString("nb-NO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          Kr
        </span>
      </div>
      <div className="amount-details d-flex justify-content-between">
        <span className="label">Total Amount:</span>
        <span className="total-amount">
          {" "}
          {totalAmount.toLocaleString("nb-NO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          Kr
        </span>
      </div>
    </>
  );
};

export default OrderTotal;
