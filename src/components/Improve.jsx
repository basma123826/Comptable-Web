import React from 'react';
import contactBg from '../assets/contact.png'; // Ton image de fond
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <section className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="overlay">
        <h2>Prenez Contact Avec Nous</h2>
      </div>

      <div className="contact-content">
        <h3>Vous Voulez Améliorer Votre Entreprise ?<br />Contactez–Nous Dès Aujourd’hui !</h3>
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Nom complet" />
            <input type="email" placeholder="Adresse e-mail" />
          </div>
          <div className="row">
            <input type="tel" placeholder="Numéro de téléphone" />
            <input type="text" placeholder="Objet" />
          </div>
          <textarea placeholder="Écrivez votre message ici..." rows="5" />
          <button type="submit">Sent Message</button>
        </form>
      </div>
    </section>
  );
};
export default ContactBanner;
      







export default Improve;