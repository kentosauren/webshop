import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import "./CSS/Cart.css";

import { useQuantity } from "../../contexts/QuantityContext";

const Cart: React.FC = () => {
  const { quantity, setQuantity } = useQuantity();

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
      <div className="outer">
        {quantity > 0 ? (
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
        ) : (
          <div className="emptyBasket">
            <h1>Ingen varer i handlekurven!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
