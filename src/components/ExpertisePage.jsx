import React from 'react';
import './ExpertisePage.css'; // Import the CSS file

const ExpertiseCard = ({ number, title, description, isImageCard = false, imageUrl = '' }) => {
    return (
        <div className={`expertise-card ${isImageCard ? 'image-card' : ''}`}>
            {isImageCard ? (
                <img src={imageUrl || "https://via.placeholder.com/400x300?text=Votre+Image+Ici"} alt={title} />
            ) : (
                <>
                    <div className="card-number">{number}</div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </>
            )}
        </div>
    );
};

const ExpertisePage = () => {
    return (
        <div className="main-container">
            <section className="hero-section">
                <h1>Vos besoins, Nos solutions</h1>
                <div className="separator"></div>
            </section>

            <section className="expertise-section">
                <h2>NOTRE EXPERTISE</h2>
                <div className="expertise-grid">
                    <ExpertiseCard
                        number="01"
                        title="Gestion des investissements"
                        description="Harness the power of the sun and embrace clean, renewable energy with our solar solutions."
                    />
                    <ExpertiseCard
                        number="02"
                        title="Optimisation fiscale"
                        description="We pride ourselves on securing great deals and promotions for our customers."
                    />
                    <ExpertiseCard
                        isImageCard={true}
                        imageUrl="https://via.placeholder.com/400x300?text=Image+Expertise" // Replace with your actual image path
                        title="Image Expertise" // Alt text for accessibility
                    />
                    <ExpertiseCard
                        number="03"
                        title="Gestion de patrimoine"
                        description="Stay connected with high-quality cable services that deliver reliable and fast internet, television."
                    />
                    <ExpertiseCard
                        number="04"
                        title="Planification financière"
                        description="We understand that navigating the solar and cable landscape can be overwhelming."
                    />
                     <ExpertiseCard
                        number="05"
                        title="Consultation et accompagnement"
                        description="We understand that navigating the solar and cable landscape can be overwhelming."
                    />
                </div>
            </section>
        </div>
    );
};

export default ExpertisePage;