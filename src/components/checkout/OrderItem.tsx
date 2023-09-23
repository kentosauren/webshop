import React, { useState, useEffect } from "react";
import "./CSS/OrderItem.css";

interface OrderItemProps {
  itemName: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  updateTotalPrice: (newPrice: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
  itemName,
  originalPrice,
  discountedPrice,
  imageUrl,
  updateTotalPrice,
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
            <div className="item-counter">{quantity + " stk"}</div>
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

export default OrderItem;
