import React from "react";
import Focus from "../../components/Focus/Focus";
import Herosection from "../../components/HeroSection/Herosection";
import Navigate from "../../components/Navigate/Navigate";
import Opentype from "../../components/Opentype/Opentype";
import Pricing from "../../components/Pricing/Pricing";
import Testimonial from "../../components/Testimonial/Testimonial";
import Variable from "../../components/Variable/Variable";

const Landing = () => {
  return (
    <div>
      <Herosection />
      <Navigate />
      <Variable />
      <Opentype />
      <Testimonial />
      <Pricing />
      <Focus />
    </div>
  );
};

export default Landing;
