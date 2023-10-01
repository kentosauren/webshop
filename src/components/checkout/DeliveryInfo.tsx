import React, { useEffect, useState } from "react";
import "./CSS/DeliveryInfo.css";

interface DeliveryInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  zip: string;
  city: string;
  //country: string;
  //notes: string;
  //sendNews: boolean;
}

const initialInfo: DeliveryInfo = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  zip: "",
  city: "",
  //country: "",
  //notes: "",
  //sendNews: false,
};

const DeliveryInfo: React.FC = () => {
  const [info, setInfo] = useState<DeliveryInfo>(() => {
    // Try to load initial state from local storage
    const storedInfo = localStorage.getItem("deliveryInfo");
    return storedInfo ? JSON.parse(storedInfo) : initialInfo;
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof DeliveryInfo, string>>
  >({});

  // const navigate = useNavigate();

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

  // const validatePhoneNumber = (num: string) => {
  //   const pattern = /^\d{8}$/;
  //   return pattern.test(num);
  // };

  // const validateForm = () => {
  //   const newErrors: Partial<Record<keyof DeliveryInfo, string>> = {};

  //   Object.keys(info).forEach((key) => {
  //     if (!info[key as keyof DeliveryInfo]) {
  //       newErrors[key as keyof DeliveryInfo] = "Dette feltet er obligatorisk";
  //     }
  //   });

  //   if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(info.email)) {
  //     newErrors.email = "Ugyldig e-post";
  //   }

  //   if (!validatePhoneNumber(info.phone)) {
  //     newErrors.phone = "Ugyldig telefonnummer";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  return (
    <>
      <h3>Kontakt</h3>
      <form>
        <div className={`input-row input-row-full ${getErrorClass("email")}`}>
          <input
            type="text"
            name="email"
            placeholder="E-post"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{errors.email}</div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            id="sendNews"
            name="sendNews"
            //checked={info.sendNews}
            onChange={handleChange} // Assumes handleChange also handles checkboxes
          />
          <label htmlFor="sendNews">Send meg nyheter og tilbud på e-post</label>
        </div>

        <br />

        <h6>Leveringsadresse</h6>

        <div
          className={`input-row ${getErrorClass("firstName")} ${getErrorClass(
            "lastName"
          )}`}
        >
          <input
            type="text"
            name="firstName"
            placeholder="Fornavn"
            value={info.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Etternavn"
            value={info.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">
          {errors.firstName || errors.lastName}
        </div>

        <div className={`input-row input-row-full ${getErrorClass("street")}`}>
          <input
            type="text"
            name="street"
            placeholder="Gateadresse"
            value={info.street}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{errors.street}</div>

        <div
          className={`input-row ${getErrorClass("zip")} ${getErrorClass(
            "city"
          )}`}
        >
          <input
            type="text"
            name="zip"
            placeholder="Postnummer"
            value={info.zip}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="By"
            value={info.city}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{errors.zip || errors.city}</div>

        <div className={`input-row input-row-full ${getErrorClass("phone")}`}>
          <input
            type="tel"
            name="phone"
            placeholder="Telefonnummer"
            value={info.phone}
            onChange={handleChange}
          />
        </div>
        <div className="error-message">{errors.phone}</div>
      </form>
      {/* <div className="button-container">
          <button onClick={goToPreviousStep}>Forrige</button>
          <button onClick={goToNextStep}>Fortsett til frakt</button>
        </div> */}
    </>
  );
};

export default DeliveryInfo;
