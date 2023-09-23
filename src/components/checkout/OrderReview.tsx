import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";

const OrderReview: React.FC = () => {
  let price = 1199;

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [shippingAmount, setShippingAmount] = useState<number>(50); // Example shipping amount

  const updateTotalPrice = (newPrice: number) => {
    setTotalPrice(newPrice);
  };

  const totalAmount = totalPrice + shippingAmount;

  return (
    <>
      <h3>Order Review</h3>
      <OrderItem
        itemName="Laptop Original max pro ultra 4k"
        originalPrice={Math.round(price * 1.33)} // 33% more than price
        discountedPrice={price}
        imageUrl="../src/assets/img/4.jpg"
        updateTotalPrice={updateTotalPrice}
      />
      <OrderTotal
        totalPrice={totalPrice}
        shippingAmount={shippingAmount}
        totalAmount={totalAmount}
      />
      <button
        className="btn btn-primary rounded-pill"
        style={{ backgroundColor: "var(--orange)" }}
      >
        Betal nå
      </button>
    </>
  );
};

export default OrderReview;
