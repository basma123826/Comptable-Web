import '../assets/Expertise.css';
import svgxpertisesImage from '../assets/svg/svgxpertisesImage.svg';
import svgkhatlfogani from '../assets/svg/svgkhatlfogani.svg';
import svglkhatltahtani from '../assets/svg/svglkhatltahtani.svg';


import React from 'react';

const Expertise = () => {
  return (
    <div className="expertise-section">
      <div className="expertise-header"> 
        <img src={svgkhatlfogani} alt="ligne" />
              <h1 className="main-title">Vos besoins, Nos solutions</h1>
        <img src={svglkhatltahtani} alt="haut ligne" />      
                <h2 className="subtitle">NOTRE EXPERTISE</h2>
      </div>

      <div className="expertise-grid-container">
        <div className="card card-1">
          <span className="card-number">01</span>
          <h3 className="card-title">Gestion des investissements</h3>
          <p className="card-description">
            Harness the power of the sun and embrace clean, renewable energy with our solar solutions.
          </p>
        </div>

        <div className="card card-2">
          <span className="card-number">02</span>
          <h3 className="card-title">Optimisation fiscale</h3>
          <p className="card-description">
            We pride ourselves on securing great deals and promotions for our customers.
          </p>
        </div>
        
        <div className="card card-3">
          <span className="card-number">03</span>
          <h3 className="card-title">Gestion de patrimoine</h3>
          <p className="card-description">
            Stay connected with high-quality cable services that deliver reliable and fast internet, television.
          </p>
        </div>

        <div className="card card-4">
          <span className="card-number">04</span>
          <h3 className="card-title">Planification financière</h3>
          <p className="card-description">
            We understand that navigating the solar and cable landscape can be overwhelming.
          </p>
        </div>

        <div className="card card-5">
          <span className="card-number">05</span>
          <h3 className="card-title">Consultation et accompagnement</h3>
          <p className="card-description">
            We understand that navigating the solar and cable landscape can be overwhelming.
          </p>
        </div>

        <div className="central-image-container">
         <img src={svgxpertisesImage} alt="Image" />
          
        </div>
      </div>
    </div>
  );
};

export default Expertise;