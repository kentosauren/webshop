// OrderSummary.tsx

import React from "react";

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface Props {
  products: Product[];
  subtotal: number;
  taxes: number;
}

const OrderSummary: React.FC<Props> = ({ products, subtotal, taxes }) => {
  const total = subtotal + taxes;

  return (
    <div className="order-summary">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <span className="product-quantity">{product.quantity}</span>
          <span className="product-name">{product.name}</span>
          {product.description && (
            <span className="product-description">{product.description}</span>
          )}
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
      ))}

      <div className="order-totals">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="shipping">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="taxes">
          <span>Taxes</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>USD ${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
