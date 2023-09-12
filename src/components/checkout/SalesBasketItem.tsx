// ./src/components/SalesBasketItem.tsx
import React, { useState } from "react";
import "./CSS/SalesBasketItem.css";

interface SalesBasketItemProps {
  itemName: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
}

const SalesBasketItem: React.FC<SalesBasketItemProps> = ({
  itemName,
  originalPrice,
  discountedPrice,
  imageUrl,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="sales-basket-item">
      <img src={imageUrl} alt={itemName} className="item-image" />
      <div className="item-info">
        <h3>{itemName}</h3>
        <div className="item-counter">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <div className="item-prices">
          <span className="original-price">${originalPrice.toFixed(2)}</span>
          <span className="discounted-price">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesBasketItem;
