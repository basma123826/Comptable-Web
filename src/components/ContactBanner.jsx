import React from "react";
import ContactBanner from "../components/ContactBanner";
import contactBg from "../assets/contactBg.png";
import "./ContactBanner.css";
const ContactBanner =() => {
   return(
   <div className="contact-banner"
   style={{backgroundImage:`url(${contactBg})`}}>
      <div className="overlay">
    <h2> Prenez Contact Avec Nous</h2>
   <div className="underline"></div>
      </div>
    </div>
   );
};
export default ContactBanner;