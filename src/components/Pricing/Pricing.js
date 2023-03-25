import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="caption">
        <h1>Pricing</h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="amount">
        <p>30-DAY FREE TRIAL</p>
        <div className="rate">
          <p>$5</p>
          <p>/month per user</p>
        </div>

        <span>Most calendars are designed for teams. </span>

        <a href="/">Get Started</a>
      </div>
    </div>
  );
};

export default Pricing;
