import React, { useEffect } from "react";
import "./CSS/CartItem.css";

interface CartItemProps {
  itemName: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  updateTotalPrice: (newPrice: number) => void;
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  itemName,
  originalPrice,
  discountedPrice,
  imageUrl,
  updateTotalPrice,
  quantity,
  setQuantity,
}) => {
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    localStorage.setItem("itemQuantity", newQuantity.toString());
    window.dispatchEvent(new Event("itemQuantityUpdated"));
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      localStorage.setItem("itemQuantity", newQuantity.toString());
      window.dispatchEvent(new Event("itemQuantityUpdated"));
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
              <span
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  width: "30px",
                }}
              >
                {quantity}
              </span>
              <button onClick={increment}>+</button>
            </div>
            <div className="item-prices">
              <span className="original-price">
                {" "}
                {(originalPrice * quantity).toLocaleString("nb-NO", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                Kr
              </span>
              <span className="discounted-price">
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

export default CartItem;
