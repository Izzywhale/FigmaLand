import React from "react";
import "./HeroSection.css";
// import dashboard from "../../images/mobiledashboard.png";
import circleshape from "../../images/circletwomobile.svg";
import circleshapeone from "../../images/circleshapeone.svg";


const Herosection = () => {
  return (
    <div className="herosection">
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
      </div>

      </div>
      <div className="circle circleOne">
        <img src={circleshapeone} alt="" />
      </div>
      <div className="circle circleshape">
        <img src={circleshape} alt="" />
      </div>
      
    </div>
  );
};

export default Herosection;
