import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

interface OrderReviewProps {
  shippingAmount: number;
}

const OrderReview: React.FC<OrderReviewProps> = ({ shippingAmount }) => {
  let price = 1199;

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateTotalPrice = (newPrice: number) => {
    setTotalPrice(newPrice);
  };

  const totalAmount = totalPrice + shippingAmount;

  return (
    <>
      <h3>Bestillingssammendrag</h3>
      <OrderItem
        itemName="Laptop Original max pro ultra 4k"
        originalPrice={Math.round(price * 1.33)}
        discountedPrice={price}
        imageUrl="../src/assets/img/4.jpg"
        updateTotalPrice={updateTotalPrice}
      />
      <hr />
      <OrderTotal
        totalPrice={totalPrice}
        shippingAmount={shippingAmount}
        totalAmount={totalAmount}
      />
      <button
        style={{
          backgroundColor: "var(--orange)",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "25px",
          padding: "10px",
        }}
      >
        Betal nå
      </button>
    </>
  );
};

export default OrderReview;
