import React from "react";
import "./Header.css";
import svg3 from "../assets/svg/svg3.svg";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // kay3raf fin nta daba

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src={svg3} alt="Comptable Logo" />
            <span>Comptable</span>
          </div>

          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ACCUEIL
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={(e) => {
                if (location.pathname === "/about") {
                  e.preventDefault(); // matdir walo ila nta f /about
                }
              }}
            >
              À PROPOS
            </NavLink>

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