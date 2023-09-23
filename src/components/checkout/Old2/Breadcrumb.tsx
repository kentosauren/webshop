import React from "react";
import { Link } from "react-router-dom";

interface StepProps {
  onNext: () => void;
  currentStep: number;
}

const Breadcrumb: React.FC<StepProps> = ({ onNext, currentStep }) => {
  return (
    <div>
      <nav className="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {currentStep >= 1 ? (
              <Link to="/cart">Handlekurv</Link>
            ) : (
              <span>Handlekurv</span>
            )}
          </li>
          <li
            className={`breadcrumb-item ${currentStep >= 2 ? "active" : ""}`}
            aria-current={currentStep >= 2 ? "page" : undefined}
          >
            {currentStep >= 2 ? (
              <Link to="/deliveryInfo">Delivery Info</Link>
            ) : (
              <span>Delivery Info</span>
            )}
          </li>
          <li
            className={`breadcrumb-item ${currentStep >= 3 ? "active" : ""}`}
            aria-current={currentStep >= 3 ? "page" : undefined}
          >
            {currentStep >= 3 ? (
              <Link to="/shipping">Shipping</Link>
            ) : (
              <span>Shipping</span>
            )}
          </li>
          <li
            className={`breadcrumb-item ${currentStep >= 4 ? "active" : ""}`}
            aria-current={currentStep >= 4 ? "page" : undefined}
          >
            {currentStep >= 4 ? (
              <Link to="/payment">Payment</Link>
            ) : (
              <span>Payment</span>
            )}
          </li>
          <li
            className={`breadcrumb-item ${currentStep >= 5 ? "active" : ""}`}
            aria-current={currentStep >= 5 ? "page" : undefined}
          >
            {currentStep >= 5 ? (
              <Link to="/confirmation">Confirmation</Link>
            ) : (
              <span>Confirmation</span>
            )}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
