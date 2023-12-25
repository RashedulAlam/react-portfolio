import React from "react";
import HeroPrimaryContent, { IHeroSummaryProps } from "./HeroPrimaryContent";
import HeroAdditionalContents, {
  IHeroAdditionalProps,
} from "./HeroAdditionalContents";
import SkillCard, { ISkillCardProps } from "./SkillCard";
export interface IHeroProps {
  primary: IHeroSummaryProps;
  secondary: IHeroAdditionalProps;
  skills: ISkillCardProps;
}

const Hero = ({ primary, secondary, skills }: IHeroProps) => {
  return (
    <div className="flex flex-col gap-20">
      <HeroPrimaryContent {...primary} />
      <SkillCard {...skills} />
      <HeroAdditionalContents {...secondary} />
    </div>
  );
};

export default Hero;
