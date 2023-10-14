import ItemCard from "./ItemCard";
import Rating from "./rating/Rating";
import RatingBreakdown from "./rating/RatingBreakdown";
import WriteReview from "./rating/WriteReview";
import ReviewCard from "./rating/ReviewCard";

import ImageCarouselResponsive from "./ImageCarouselResponsive";
import LoremIpsum from "./LoremIpsum";

import axios from "axios";
import { useEffect, useState } from "react";

interface ProductData {
  image_urls: string[];
  // ... add other fields here, like productname and price, as they are needed
  productname: string;
  price: number;
  description: string;
}

const ProductPage: React.FC = () => {
  const productId = "1";
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/product/${productId}`
        );
        setProductData(response.data);
        console.log("API response productpage:", response.data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };
    fetchData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainContent">
      <ImageCarouselResponsive image_urls={productData.image_urls} />
      <ItemCard productId={productId} productData={productData} />

      <LoremIpsum />

      <img
        src="./src/assets/img/3.jpg"
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <LoremIpsum />

      <div className="row">
        <div className="col">
          <Rating rating={4.89} reviews={18} />
        </div>
        <div className="col">
          <RatingBreakdown ratings={{ 5: 16, 4: 2, 3: 0, 2: 0, 1: 0 }} />
        </div>
        <div className="col">
          <WriteReview />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ReviewCard
            imageUrl="src/assets/img/reviews/reviewTest.jpg"
            name="Mr. Paddington"
            date="2023-07-13"
            reviewText="Jeg liker dette veldig godt!"
          />
        </div>
        <div className="col">
          <ReviewCard
            imageUrl="src/assets/img/reviews/test2.jpg"
            name="Ms. Smith"
            date="2023-07-14"
            reviewText="Fantastisk produkt!"
          />
        </div>
        <div className="col">
          <ReviewCard
            imageUrl="src/assets/img/reviews/1.jpg"
            name="John Doe"
            date="2023-07-15"
            reviewText="Dette har forbedret hverdagen min."
          />
        </div>
        <div className="col">
          <ReviewCard
            imageUrl="src/assets/img/reviews/2.jpg"
            name="Jane Austen"
            date="2023-07-16"
            reviewText="Absolutt anbefalt!"
          />
        </div>
        <div className="col">
          <ReviewCard
            imageUrl="src/assets/img/reviews/3.jpg"
            name="Ella Fitzgerald"
            date="2023-07-17"
            reviewText="Veldig fornøyd med dette kjøpet."
          />
        </div>
        <div className="col">
          <ReviewCard
            imageUrl="src/assets/img/reviews/4.jpg"
            name="Oscar Wilde"
            date="2023-07-18"
            reviewText="Et must-have for alle!"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
