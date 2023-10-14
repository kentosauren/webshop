// OrderConfirmation.tsx
import React from "react";
import "./css/OrderConfirmation.css";
import OrderSummary from "./OrderSummary";

type Product = {
  name: string;
  details: string;
  price: number;
  imageUrl: string;
};

type OrderConfirmationProps = {
  orderNumber: number;
  products: Product[];
  subtotal: number;
  taxes: number;
  total: number;
};

const sampleProducts = [
  {
    id: "1",
    name: "Unlimited Leather Shoes",
    description: "Medium / Classic / Red",
    price: 142.0,
    quantity: 1,
    imageUrl: "path_to_image_of_shoes.jpg", // replace with actual image path or URL
  },
  {
    id: "2",
    name: "Dress",
    price: 560.0,
    quantity: 1,
    imageUrl: "path_to_image_of_dress.jpg", // replace with actual image path or URL
  },
];

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderNumber,
  products,
  subtotal,
  taxes,
  total,
}) => (
  <div className="order-confirmation">
    <h2>Ordrebekreftelse</h2>
    <div className="order-number">Ordre #{orderNumber}</div>
    <h2>Takk for bestillingen!</h2>
    {products.map((product) => (
      <ProductItem key={product.name} product={product} />
    ))}

    <OrderSummary products={sampleProducts} subtotal={702.0} taxes={62.3} />
    {/* <OrderSummary subtotal={subtotal} taxes={taxes} total={total} /> */}
  </div>
);

// ProductItem.tsx
type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <div className="product-item">
    <img src={product.imageUrl} alt={product.name} />
    <div className="product-details">
      <h3>{product.name}</h3>
      <p>{product.details}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
    <div>
      Your shipment is confirmed
      <div>
        We've accepted your order, and we're getting it ready. Come back to this
        page for updates on your shipment status.
      </div>
    </div>
  </div>
);

// // OrderSummary.tsx
// type OrderSummaryProps = {
//   subtotal: number;
//   taxes: number;
//   total: number;
// };

// const OrderSummary: React.FC<OrderSummaryProps> = ({
//   subtotal,
//   taxes,
//   total,
// }) => (
//   <div className="order-summary">
//     <div>Subtotal: ${subtotal.toFixed(2)}</div>
//     <div>Shipping: Calculated at next step</div>
//     <div>Taxes: ${taxes.toFixed(2)}</div>
//     <div>Total: ${total.toFixed(2)}</div>
//   </div>
// );

export default OrderConfirmation;
