import React from "react";
import { Link } from "react-router-dom";
import ItemInfo from "./ItemInfo";
import StarRating from "./StarRating";
import SparkleRow from "./SparkleRow";
import BuyNowButton from "./BuyNowButton";
type ProductDataType = {
  productname: string;
  price: number;
};

const ItemCard: React.FC<{
  productId: string;
  productData: ProductDataType;
}> = ({ productId, productData }) => {
  const { productname, price } = productData;

  // Convert the price to discounted and retail prices
  const discountedPrice = Number(price);
  const retailPrice = discountedPrice + discountedPrice * 0.33;

  return (
    <>
      <ItemInfo
        name={productname}
        discountedPrice={discountedPrice}
        retailPrice={retailPrice}
      />
      <StarRating />
      <SparkleRow />
      <Link to="/cart">
        <BuyNowButton productId={productId} />
      </Link>
    </>
  );
};

export default ItemCard;
