import React from "react";
import "./Opentype.css";
import mobilecode from "../../images/mobilecode.png";

const Opentype = () => {
  return (
    <div className="openType">
      <section>
        <span className="deskNote">
          <h3> Variable fonts</h3>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </p>
          <a href="/">LEARN MORE</a>
        </span>

        <div className="openImage">
          <img src={mobilecode} alt="" />
        </div>

        <div className="openNote">
          <h3>OpenType features</h3>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who wan.
          </p>
          <a href="/">LEARN MORE</a>
        </div>
      </section>

      <section>
        <div className="file">
          <h1 className="mobHeader">File tasks</h1>
          
          <p className="mobParagraph">
            Being a freelancer is a rollercoaster of emotions. We built Slate to
            keep your freelance business less stressful.
          </p>
          
          <span className="flip">
          <h1 className="deskHeader">A rethink of how we work</h1>
          <p className="deskPara">
            Being a freelancer is a rollercoaster of emotions. We built Slate to
            keep your
          </p>
          </span>

          <div className="lineBar">
            <div className="line">
              <div className="innerline"></div>
            </div>
            <div className="lineFigure">
              <p>Facebook</p>
              <p>35,929</p>
            </div>
          </div>

          <a href="/">Get Started For Free</a>
        </div>
      </section>
    </div>
  );
};

export default Opentype;
