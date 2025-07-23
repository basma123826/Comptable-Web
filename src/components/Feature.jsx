import React from "react";
import "./Feature.css";
import reunion from "../assets/reunion.png";
import check1 from "../assets/svg/check1.svg";
import flechev from "../assets/svg/flechev.svg";  
const Feature = () => {
  return (
    <section className="feature-section">
      <div className="feature-image"> {/* Utilise "feature-image" */}
        <img src={reunion} alt="Réunion" />
      </div>
      <div className="feature-content">
        <div className="feature-item">
          <img src={check1} alt="check icon" />
          <h3>
            Idées d’entreprise et <br /> Innovation
          </h3>
        </div>
        {/* La ligne de séparation sera gérée par CSS sur .feature-content */}
        <div className="feature-item">
          <img src={check1} alt="check icon" />
          <h3>
            Annuaire des Entreprises <br /> financières
          </h3>
        </div>
        <button className="feature-btn"> 
          CONTACTEZ-NOUS
          <div className="fleche-vert"> {/* Utilise "fleche-vert" */}
            <img src={flechev} alt="fleche icon" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Feature;