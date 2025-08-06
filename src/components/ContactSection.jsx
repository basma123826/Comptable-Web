import '../assets/ContactSection.css';

function ContactSection() {
   return (
    <div className="container">
      <div className="left">
        <h1>Demandez un appel</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div className="right">
        <div className="title">En quoi pouvons-nous vous aider?</div>
        <form className="form">
          <div className="row">
            <input type="text" placeholder="Entrez votre nom" />
            <input type="email" placeholder="Entrez votre Email" />
          </div>
          <div className="row">
            <input type="tel" placeholder="Numéro de téléphone" />
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;