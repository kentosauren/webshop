import React, { useState, useEffect } from "react";
import "./CSS/CartItem.css";
import { useQuantity } from "../../contexts/QuantityContext";

interface CartItemProps {
  itemName: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  updateTotalPrice: (newPrice: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  itemName,
  originalPrice,
  discountedPrice,
  imageUrl,
  updateTotalPrice,
}) => {
  const { quantity, setQuantity } = useQuantity();

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const newPrice = discountedPrice * quantity;
    updateTotalPrice(newPrice);
  }, [quantity, discountedPrice, updateTotalPrice]);

  return (
    <>
      <div className="sales-basket-item">
        <div className="image-container">
          <img src={imageUrl} alt={itemName} className="item-image" />
        </div>
        <div className="item-info">
          <h3>{itemName}</h3>
          <div className="hor">
            <div className="item-counter">
              <button onClick={decrement}>-</button>
              <span style={{ paddingLeft: "7px", paddingRight: "7px" }}>
                {quantity}
              </span>
              <button onClick={increment}>+</button>
            </div>
            <div className="item-prices">
              <span className="original-price">
                {(originalPrice * quantity).toFixed(2)} Kr
              </span>
              <span className="discounted-price">
                {(discountedPrice * quantity).toFixed(2)} Kr
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
