import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <div>
      <nav className="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="./cart">Handlekurv</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Informasjon
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
