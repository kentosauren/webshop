import React, { useState } from "react";

interface DeliveryInformation {
  name: string;
  address: string;
  city: string;
  postalCode: string;
}

const CheckoutComponent: React.FC = () => {
  const [deliveryInformation, setDeliveryInformation] =
    useState<DeliveryInformation>({
      name: "",
      address: "",
      city: "",
      postalCode: "",
    });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryInformation({
      ...deliveryInformation,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(deliveryInformation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="address"
        onChange={handleInputChange}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="city"
        onChange={handleInputChange}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="postalCode"
        onChange={handleInputChange}
        placeholder="Postal Code"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutComponent;
