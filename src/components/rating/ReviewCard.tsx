import React from "react";
import "./ReviewCard.css";

interface Props {
  imageUrl: string;
  name: string;
  date: string;
  reviewText: string;
}

const ReviewCard: React.FC<Props> = ({ imageUrl, name, date, reviewText }) => {
  return (
    <div className="review-card">
      <img className="review-image" src={imageUrl} alt="Review" />
      <div className="review-details">
        <h3>{name}</h3>
        <span className="review-date">{date}</span>
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
