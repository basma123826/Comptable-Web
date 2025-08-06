import '../assets/Footer.css';

import svgEmail from'../assets/svg/svgEmail.svg';
import  svgFacebook from'../assets/svg/svgFacebook.svg';
import  svgInstagram from'../assets/svg/svgInstagram.svg';
import svgLinkedIn from '../assets/svg/svgLinkedIn.svg';
import svgPhone from'../assets/svg/svgPhone.svg';
import svgCol from'../assets/svg/svgCol.svg';
import  svgLocalisation from'../assets/svg/svgLocalisation.svg';

function Footer() {
  return (
<section className='footerSection'>

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

        <div className="contact-right">
          <h3>Collaborons dès maintenant!</h3>
          <form>
            <label>Nom et Prénom</label>
            <input placeholder="Entrez votre nom" className="input-field" />
 <div className="row">
              <div className="column">
                <label>Email</label>
                <input placeholder="Entrez votre Email" className="input-field" />
              </div>
              <div className="column">
                <label>Téléphone</label>
                <input placeholder="Numéro de téléphone" className="input-field" />
              </div>
            </div>

            <label>Message</label>
            <textarea
      placeholder="Écrire un message..."
      className="input-field textarea"
    ></textarea>
     <button className="submit-btn">Envoyer</button>
           </form> 
</div>
</div>
<div className='triangle'>
  <img src={svgCol}/>
</div>
<div className="footer-bottom">
        <p>© SOFTCACTUS, TOUS LES DROITS SONT RÉSERVÉS, 2025</p>
      </div>

</section>


  )
    
    

  }


export default Footer;




