import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={logo} alt="logo" />
        <p>Just type what's on your mind </p>
      </div>
      <div>
        
        <nav className="footerNav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/about">Contact</NavLink>
        </nav>
      </div>
      <div className="icons">
        {" "}
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
};

export default Footer;
