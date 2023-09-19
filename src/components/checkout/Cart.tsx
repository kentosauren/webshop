import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./CSS/Cart.css";

const Cart: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateTotalPrice = (newPrice: number) => {
    setTotalPrice(newPrice);
  };

  let price = 1199;
  let discPercent = 33;

  useEffect(() => {
    const discountedPrice = price;
    updateTotalPrice(discountedPrice);
  }, []);

  return (
    <>
      <div className="container-center ">
        <CartItem
          itemName="Laptop Original max pro ultra 4k"
          originalPrice={Math.round(price * 1.33)} // 33% more than price
          discountedPrice={price}
          imageUrl="../src/assets/img/4.jpg"
          updateTotalPrice={updateTotalPrice}
        />
        <CartTotal totalPrice={totalPrice} />
      </div>
    </>
  );
};

export default Cart;
