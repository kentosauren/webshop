import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/DeliveryInfo.css";

interface DeliveryInfoProps {
  onSubmit: () => void;
  isEditable: boolean;
  setEditable: (value: boolean) => void;
}

interface DeliveryInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  zip: string;
  city: string;
}

const initialInfo: DeliveryInfo = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  zip: "",
  city: "",
};

const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  onSubmit,
  isEditable,
}) => {
  const [info, setInfo] = useState<DeliveryInfo>(() => {
    const storedInfo = localStorage.getItem("deliveryInfo");
    return storedInfo ? JSON.parse(storedInfo) : initialInfo;
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof DeliveryInfo, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("deliveryInfo", JSON.stringify(info));
  }, [info]);

  const getErrorClass = (fieldName: keyof DeliveryInfo) => {
    return errors[fieldName] ? "error" : "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    // If the form is not valid, stop the function
    if (!isValid) {
      return;
    }

    // Proceed with the API request if the form is valid
    try {
      const response = await axios.post(
        "http://localhost:3001/api/save-delivery-info",
        info
      );
      console.log(response.data);

      // If successful, call the onSubmit callback
      onSubmit();
    } catch (error) {
      console.error("Error saving delivery info", error);
    }
  };

  const validatePhoneNumber = (num: string) => {
    const pattern = /^\d{8}$/;
    return pattern.test(num);
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof DeliveryInfo, string>> = {};

    Object.keys(info).forEach((key) => {
      if (!info[key as keyof DeliveryInfo]) {
        newErrors[key as keyof DeliveryInfo] = "Dette feltet er obligatorisk";
      }
    });

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(info.email)) {
      newErrors.email = "Ugyldig e-post";
    }

    if (!validatePhoneNumber(info.phone)) {
      newErrors.phone = "Ugyldig telefonnummer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <h3>Kontakt</h3>

      <div
        className={`floating-label input-row input-row-full ${getErrorClass(
          "email"
        )}`}
      >
        <input
          type="text"
          name="email"
          value={info.email}
          onChange={handleChange}
          disabled={!isEditable}
          required
        />
        <label>E-post</label>
      </div>
      <div className="error-message">{errors.email}</div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          id="sendNews"
          name="sendNews"
          onChange={handleChange}
        />
        <label htmlFor="sendNews">Send meg nyheter og tilbud på e-post</label>
      </div>
      <div className={`floating-label input-row ${getErrorClass("firstName")}`}>
        <input
          type="text"
          name="firstName"
          value={info.firstName}
          onChange={handleChange}
          required
        />
        <label>Fornavn</label>
      </div>
      <div className="error-message">{errors.firstName}</div>

      <div className={`floating-label input-row ${getErrorClass("lastName")}`}>
        <input
          type="text"
          name="lastName"
          value={info.lastName}
          onChange={handleChange}
          required
        />
        <label>Etternavn</label>
      </div>
      <div className="error-message">{errors.lastName}</div>
      <div
        className={`floating-label input-row input-row-full ${getErrorClass(
          "street"
        )}`}
      >
        <input
          type="text"
          name="street"
          value={info.street}
          onChange={handleChange}
          required
        />
        <label>Gateadresse</label>
      </div>
      <div className="error-message">{errors.street}</div>

      <div className="row">
        <div className="col">
          <div className={`floating-label input-row ${getErrorClass("zip")}`}>
            <input
              type="text"
              name="zip"
              value={info.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col">
          <label>Postnummer</label>
          <div className="error-message">{errors.zip}</div>

          <div className={`floating-label input-row ${getErrorClass("city")}`}>
            <input
              type="text"
              name="city"
              value={info.city}
              onChange={handleChange}
              required
            />
            <label>Sted</label>
          </div>
          <div className="error-message">{errors.city}</div>
        </div>
      </div>

      <div
        className={`floating-label input-row input-row-full ${getErrorClass(
          "phone"
        )}`}
      >
        <input
          type="tel"
          name="phone"
          value={info.phone}
          onChange={handleChange}
          required
        />
        <label>Telefonnummer</label>
      </div>
      <div className="error-message">{errors.phone}</div>

      <form onSubmit={handleSubmit}>
        <br />
        <center>
          <input type="submit" value="Fortsett til frakt og betaling" />
        </center>
        <br />
      </form>
    </div>
  );
};

export default DeliveryInfo;
