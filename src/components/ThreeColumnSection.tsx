import React from "react";
import { Link } from "react-router-dom";
import "./CSS/ThreeColumnSection.css"; // Make sure to create this CSS file

const ThreeColumnSection: React.FC = () => {
  return (
    <div className="three-column-section">
      <div className="column">
        <p>
          Vi grunnla Metago for å løse problemet med små skader på veggene og
          listverket i hjemmet ditt. Målet vårt er å tilby en enkel og effektiv
          løsning for å reparere disse skadene uten å måtte leie dyre
          håndverkere, slik at du kan få tilbake følelsen av et friskt hjem på
          null tid. Stol på Metagp for å forbedre opplevelsen av hjemmet ditt!
        </p>
      </div>
      <div className="column">
        <h2 className="bold-header">Bedriftsinformasjon</h2>
        <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
          <li>
            <a href="#">Brukervilkår</a>
          </li>
          <li>
            <a href="#">Personværnerklæring</a>
          </li>
          <li>
            <a href="#">Samarbeid med oss!</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h2 className="bold-header">Kundeservice</h2>
        <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
          <li>
            <a href="#">Spørsmål og svar</a>
          </li>
          <li>
            <a href="#">Kontakt oss</a>
          </li>
          <li>
            <a href="#">Spor din pakke</a>
          </li>
          <li>
            <a href="#">Bli forhandler</a>
          </li>
          <li>
            <Link to="/returns">Returer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThreeColumnSection;
