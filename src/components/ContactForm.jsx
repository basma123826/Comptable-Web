import React from 'react';
import ProfileIcon from "../assets/svg/img_profile.svg";
import EmailIcon from "../assets/svg/img_message.svg";
import CallIcon from "../assets/svg/img_call.svg";
import SubjectIcon from "../assets/svg/img_message_gray_900.svg";
import cercle from "../assets/svg/cercle.svg";
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      {/* Cercle décoratif */}
      <div className="contact-form-container">
       <h2 className="contact-title">
  Vous Voulez Améliorer Votre Entreprise ?<br/>
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
              <img src={EmailIcon} alt="email" className="icon" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <input type="tel" placeholder="Numéro de téléphone" />
              <img src={CallIcon} alt="phone" className="icon" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Objet" />
              <img src={SubjectIcon} alt="subject" className="icon" />
            </div>
          </div>

          <div className="input-group full-width">
            <textarea placeholder="Écrivez votre message ici..." rows="5"></textarea>
          </div>

          <button type="submit" className="submit-button">Sent Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
