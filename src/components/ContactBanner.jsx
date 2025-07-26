import React from "react";
import "./ContactBanner.css";
import bgImage from "../assets/img_untitled_design_32_1.png";
import ligneTop from "../assets/svg/ligneHall.svg";
import ligneBottom from "../assets/svg/lineBas.svg";

const ContactBanner = () => {
  return (
    <section
      className="contact-banner-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="contact-banner-content">
        <img src={ligneTop} alt="Ligne décorative haut" className="line-decor" />
        <h1 className="contact-banner-title">Prenez Contact Avec Nous</h1>
        <img src={ligneBottom} alt="Ligne décorative bas" className="line-decor" />
      </div>
    </section>
  );
};

export default ContactBanner;
