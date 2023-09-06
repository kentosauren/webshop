// ImageCarousel.tsx
import React, { useState } from "react";
import Slider from "react-slick";
import "./CSS/ImageCarousel.css"; // Adjust this path to where your ImageCarousel.css file is located

const images = [
  "src/assets/img/1.jpg",
  "src/assets/img/2.jpg",
  "src/assets/img/3.jpg",
  "src/assets/img/4.jpg",
  "src/assets/img/5.jpg",
];

const ImageCarousel: React.FC = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true, // Make sure this is set to true
  };

  return (
    <div className="carousel-container">
      <div className="main-image">
        <img src={mainImage} alt="Main" />
      </div>
      <div className="thumbnail-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => setMainImage(image)}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
