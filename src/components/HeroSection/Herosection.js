import React from "react";
import "./HeroSection.css";
import dashboard from "../../images/mobiledashboard.png";

const Herosection = () => {
  return (
    <div className="herofield">
      <div className="cont">
        <h1>Lightning fast prototyping</h1>
        <p>
          Most calendars are designed for teams.
          <span> Slate is designed for freelancers.</span>{" "}
        </p>
        <div className="buttons">
          <a href="/">Get Started</a>
          <a href="/">Try for free</a>
        </div>
        <div className="heroImage">
          <img src={dashboard} alt="" className="dash" />
        </div>
      </div>

      <div className="circleOne"></div>

      <div className="circleTwo"></div>
    </div>
  );
};

export default Herosection;
