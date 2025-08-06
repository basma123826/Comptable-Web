import React from 'react';
import './NousContacter.css'; // TRÈS IMPORTANT : Assurez-vous que ce chemin est correct et que le fichier existe

const NousContacter = () => {
    return (
        <div className="nous-contacter-container">
            <div className="nous-contacter-content-wrapper">
                {/* Section Gauche : Texte "Demandez un appel" */}
                <div className="left-section">
                    <h1 className="title">Demandez un appel</h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                        ut labore et dolore magna.
                    </p>
                </div>

                {/* Section Droite : Formulaire */}
                <div className="right-section">
                    <h2 className="form-title">En quoi pouvons-nous vous aider ?</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Entrez votre nom" className="input-field" />
                        <input type="email" placeholder="Entrez votre Email" className="input-field" />
                        <input type="tel" placeholder="Numéro de téléphone" className="input-field" />
                        <button type="submit" className="submit-button">Envoyer</button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; SOFTCACTUS, TOUS LES DROITS SONT RÉSERVÉS, 2025</p>
            </footer>

            {/* Bouton de retour en haut de page */}
            <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                {/* Assurez-vous d'avoir Font Awesome importé dans public/index.html pour cette icône */}
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default NousContacter;