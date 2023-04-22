import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="caption">
        <h1>Pricing</h1>
        <p className="flip1">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way
        </p>
        <p className="flip2">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="amount">
        <p className="thirty">30-DAY FREE TRIAL</p>
        <div className="rate">
          <p>$5</p>
          <p>
            /month <strong> per user</strong>
          </p>
        </div>

        <span>Most calendars are designed for teams. </span>

        <a href="/">Get Started</a>
      </div>
    </div>
  );
};

export default Pricing;
