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
  const [quantity, setQuantity] = useState<number>(0);

  // Initialize quantity from localStorage
  useEffect(() => {
    const storedQuantity = localStorage.getItem("itemQuantity");
    if (storedQuantity) {
      setQuantity(Number(storedQuantity));
    }
  }, []);

  // Update the total price based on the current quantity
  useEffect(() => {
    const newPrice = discountedPrice * quantity;
    updateTotalPrice(newPrice);
  }, [quantity, discountedPrice, updateTotalPrice]);

  return (
    <>
      <div className="order-basket-item">
        <div className="order-image-container">
          <img src={imageUrl} alt={itemName} className="order-item-image" />
        </div>
        <div className="order-item-info">
          <h3>{itemName}</h3>
          <div className="order-hor">
            <div className="order-item-counter">{quantity + " stk"}</div>
            <div className="order-item-prices">
              <span className="order-original-price">
                {" "}
                {(originalPrice * quantity).toLocaleString("nb-NO", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                Kr
              </span>
              <span className="order-discounted-price">
                {" "}
                {(discountedPrice * quantity).toLocaleString("nb-NO", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                Kr
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
