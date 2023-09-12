// src/components/ItemCard.tsx
import ItemInfo from "../components/ItemInfo";

import StarRating from "../components/StarRating";
import SparkleRow from "../components/SparkleRow";
import BuyNowButton from "../components/BuyNowButton";
import "./CSS/terms.css";

const ReturnPolicy: React.FC = () => {
  return (
    <>
      <ItemInfo
        name="Sample Item"
        discountedPrice={19.99}
        retailPrice={29.99}
      />
      <StarRating />
      <SparkleRow />
      <BuyNowButton />
    </>
  );
};

export default ReturnPolicy;
