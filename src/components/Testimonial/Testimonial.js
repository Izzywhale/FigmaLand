import React from "react";
import "./Testimonial.css"
import ibmlogo from "../../images/ibmlogo.png";
import Esther from "../../images/Esther.png";
import egg from "../../images/egg.svg";
import bigegg from "../../images/bigegg.svg";
import mobilegg from "../../images/mobilegg.svg"; 
import mobilebigegg from "../../images/mobilebigegg.svg";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <h3>Testimonials</h3>

      <div className="bend">
        <img src={mobilegg} alt="/" />
      </div>

      <div className="ibm">
        <img src={ibmlogo} alt="" />
      </div>

    

      <p>
        Being a freelancer is a rollercoaster of emotions.{" "}
        <strong>
          We built Slate to keep your freelance business less stressful.
        </strong>{" "}
        <span>we'd love to show you what we are building ... </span>{" "}
      </p>

      <div className="client">
        <img src={Esther} alt="" />

        <p>
          Esther Webb <strong>Designer</strong>
        </p>
      </div>

      <a href="/">All Testimonials</a>

      <div className="mobilequad">
        <img src={mobilebigegg} alt="" />
      </div>

      <div className="quadrant">
        <img src={egg} alt="" />
      </div>

      <div className="edge">
        <img src={bigegg} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
