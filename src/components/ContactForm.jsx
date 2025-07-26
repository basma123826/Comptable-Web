import React from 'react';
import ProfileIcon from "../assets/svg/img_profile.svg";
import GroupIcon from "../assets/svg/img_message_gray_900.svg";
import CallIcon from "../assets/svg/img_call.svg";
import MessageIcon from "../assets/svg/img_message.svg";
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2 className="contact-title">
        Vous Voulez Améliorer Votre Entreprise ? <br />
        <span>Contactez-Nous Dès Aujourd’hui !</span>
      </h2>

      <form className="contact-form">
        <div className="form-row">
          <div className="input-group">
            <input type="text" placeholder="Nom complet" />
            <img src={ProfileIcon} alt="user" className="icon" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Adresse e-mail" />
            <img src={MessageIcon} alt="email" className="icon" />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <input type="tel" placeholder="Numéro de téléphone" />
            <img src={CallIcon} alt="phone" className="icon" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Objet" />
            <img src={GroupIcon} alt="subject" className="icon" />
          </div>
        </div>

        <textarea placeholder="Écrivez votre message ici..." rows="5"></textarea>

        <button type="submit" className="submit-button">Sent Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
