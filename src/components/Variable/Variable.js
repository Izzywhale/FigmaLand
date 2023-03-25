import React from "react";
import screen from "../../images/screen.png";
import "./Variable.css";

const Variable = () => {
  return (
    <div className="screenSection">
      <div className="screenContent">
        <div className="">
          <h3 className="vf"> Variable fonts </h3>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>

          <span>
            <h3 className="of">OpenType features</h3>
            <article> Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</article>
            {}
          </span>
      
          <a href="/">LEARN MORE</a>
        </div>
        <div className="screenImage">
          <img src={screen} alt="" />
        </div>
      </div>
      <div className="shape"></div>
      <div className="deskShape"></div>
    </div>
  );
};

export default Variable;
