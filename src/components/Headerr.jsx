import React from "react";
import "./Header.css";
import  svg3 from "../assets/svg/svg3.svg";


function Header() {
  return (
    <div>
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={svg3} alt="Comptable Logo" />
          <span>Comptable</span>
        </div>
        <nav className="nav">
          <a href="#" className="active">ACCUEIL</a>
          <a href="#">À PROPOS</a>
          <a href="#">NOS SERVICES</a>
          <a href="#">BLOG</a>
          <a href="#">FAQ</a>
        </nav>
        <button className="contact-btn">CONTACT</button>
      </div>
    </header>
     </div>
  );
}
export default Header; 
