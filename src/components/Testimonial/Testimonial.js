import React from "react";
import './Testimonial.css';
import ibmlogo from "../../images/ibmlogo.png";
import Esther from "../../images/Esther.png"

const Testimonial = () => {
  return (
    <div className="testimonials">
      <h3>Testimonials</h3>
      <div className="ibm">
        <img src={ibmlogo} alt="" />
      </div>
      <p>
        Being a freelancer is a rollercoaster of emotions. We built Slate to
        keep your freelance business less stressful.{" "}
      </p>
      <span> <p> we'd love to show you what we are building ... </p></span>
      <div className="client">
        <div><img src={Esther} alt="" /></div>
        <p>Esther Webb Designer</p>

      </div>

      <a href="/">All Testimonials</a>

      <div className="quadrant"></div>
    </div>
  );
};

export default Testimonial;
