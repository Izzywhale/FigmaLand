import React from "react";
import "./Navigate.css";

const Navigate = () => {
  return (
    <div className="subheroSection">
      <h3>Just type </h3>
      <h1>Fastest way to navigate</h1>
      <p>
        Most calendars are designed for teams. Slate is designed for
        freelancers.
      </p>
     
      <div className="heroButton">
        <a href="/" className="download">
          Download
        </a>
        <a href="/">See Walkthrough</a>
      </div>
    </div>
  );
};

export default Navigate;
