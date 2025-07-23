import React from "react";
import "./ExperienceSection.css";
import womanMeeting from "../assets/womanmeeting.png";
import teamColla from "../assets/TeamColla.png";
import cercle from "../assets/svg/cercle.svg";
import flechee from "../assets/svg/flechee.svg";
import cerclev from "../assets/svg/cerclev.svg";
import flechev from "../assets/svg/flechev.svg";

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      {/* Left side - Images */}
      <div className="experience-left">
        {/* Background image (team) */}
        <img src={teamColla} alt="team" className="background-img" />

        {/* Woman image above team image */}
        <img src={womanMeeting} alt="woman" className="woman-img" />

        {/* Cercle behind everything */}
        <img src={cerclev} alt="cerclev" className="cerclev-svg" />

        

        {/* Flechee SVG top-right */}
        <img src={flechee} alt="flechee" className="flechee-svg" />
      </div>

      {/* Right side - Text content */}
      <div className="experience-right">
        <img src={cercle} alt="decor" className="decor-circle" />
        <div className="tag">Plus Qu’une Entreprise</div>
        
        <h1 className="experience-title"
        style={{width:"519px",font:"Ubuntu",
          color:"#282C4B", fontsize:"40px",lineHeight:"112%",style:"Bold",letterSpacing:"0%",case:"capitalize"}}
        >
           Favoriser la réussite <br/>grâce à des solutions <br/>éclairées
        </h1>
        
        
       <p className="experience-description"
       style={{ fontSize:"25px", font:"Poppins",color:"#898989",style:"Regular",
        width:"623px",height:"164px",top:"1794", left:"741",lineHeight:"166%"
       }}
       >
       Avec une vision claire et des solutions éclairées,
      nous vous aidons à prendre les bonnes décisions<br/>
      pour faire grandir votre entreprise. Ensemble,<br/>
      construisons votre succès.
      </p>
        
        <button className="experience-btn">
          COLLABORONS ENSEMBLE
          <span className="arrow-circle">
            <img src={flechev} alt="arrow" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;


