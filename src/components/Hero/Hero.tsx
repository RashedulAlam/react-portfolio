import React from "react";
import HeroPrimaryContent from "./HeroPrimaryContent";
import HeroAdditionalContents from "./HeroAdditionalContents";

const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroPrimaryContent />
      <HeroAdditionalContents />
    </div>
  );
};

export default Hero;
