import React from "react";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import ExperienceSection from "../components/ExperienceSection";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("about"); // path relatif (pas slash) car basename = "/Comptable"
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <Feature />
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <button onClick={goToAbout}>Voir plus sur nous</button>
      </div>
      <ExperienceSection />
    </div>
  );
}

export default Home;


