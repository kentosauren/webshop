// src/components/ItemCard.tsx
import React from "react";
import ItemInfo from "../components/ItemInfo";
import StarRating from "../components/StarRating";
import SparkleRow from "../components/SparkleRow";
import BuyNowButton from "../components/BuyNowButton";
import { Link } from "react-router-dom";
import "./CSS/terms.css";

const ItemCard: React.FC = () => {
  return (
    <>
      {/* <div style={{ border: "1px solid grey" }}> */}
      <ItemInfo
        name="Laptop Original max pro ultra 4k"
        discountedPrice={19.99}
        retailPrice={29.99}
      />
      <StarRating />
      <SparkleRow />
      <Link to="/checkout/cart">
        <BuyNowButton />
      </Link>
    </>
  );
};

export default ItemCard;
