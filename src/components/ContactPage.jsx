import React from 'react';
import '../assets/ContactPage.css';
import svgEmail from'../assets/svg/svgEmail.svg';
import  svgFacebook from'../assets/svg/svgFacebook.svg';
import  svgInstagram from'../assets/svg/svgInstagram.svg';
import svgLinkedIn from '../assets/svg/svgLinkedIn.svg';
import svgPhone from'../assets/svg/svgPhone.svg';
import svgCol from'../assets/svg/svgCol.svg';
import  svgLocalisation from'../assets/svg/svgLocalisation.svg';

const ContactPage = () => {
  return(

<div className="contact-container">
        <div className="contact-left">
  <div class="ligne-degradee"></div>
          <h2 className="contact-title">POUR NOUS JOINDRE</h2>
          <p className="contact-subtext">
            DÉCOUVREZ DES SOLUTIONS ABORDABLES POUR VOTRE VOITURE!
          </p>
<div className="contact-info">
            <div className="info-block">
              <img src={svgPhone} alt="Phone" />
              <div>
                <strong>Appeler à tout moment</strong>
                <p>05 36 716 777<br />05 36 716 778</p>
              </div>
            </div>

            <div className="info-block">
              <img src={svgEmail} alt="Email" />
              <div>
                <strong>Envoyer un e-mail</strong>
                <p>contact@auto48.ma</p>
              </div>
            </div>
  <div className="info-block">
              <img src={svgLocalisation} alt="Map" />
              <div>
                <strong>Visitez-nous</strong>
                <p>Rte d'Algérie lotis boustane 3 N° 191<br />Zone industrielle – Oujda</p>
              </div>
            </div>
          </div>
 <div className="social-icons">
            <img src={svgFacebook} alt="Facebook" />
            <img src={svgLinkedIn} alt="LinkedIn" />
            <img src={svgInstagram} alt="Instagram" />
          </div>
        </div>

       
      
      {/* Had l-section ghadi ykoun fiha l-photo w-l-titre */}
      <div className="card photo-card">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.530372270992!2d-1.921356784871928!3d34.69530468043516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd95166418b76543%3A0x6e7686561f2f8b5a!2sSoft%20Cactus!5e0!3m2!1sfr!2sma!4v1675713459957!5m2!1sfr!2sma"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Emplacement de Soft Cactus à Oujda"
></iframe>
  <h2 className="titre-expertise">NOTRE EXPERTISE</h2>
</div>
<div className='triangle'>
  <img src={svgCol}/>
</div>
<div className="footer-bottom">
        <p>© SOFTCACTUS, TOUS LES DROITS SONT RÉSERVÉS, 2025</p>
      </div>
 </div>
  )
}
  

export default ContactPage;