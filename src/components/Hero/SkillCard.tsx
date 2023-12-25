import React from "react";

export interface ISkillGroup {
  groupName: string;
  items: ISkillGroupItem[];
}

interface ISkillGroupItem {
  name: string;
  icon: string;
  class: string;
}

export interface ISkillCardProps {
  skills: ISkillGroup[];
  techSkillIntro: string;
  techSkillLabel: string;
  softSkillLabel: string;
  softSkillIntro: string;
  softSkills: { items: { name: string }[] }[];
}

const SkillCard = ({
  techSkillLabel,
  techSkillIntro,
  softSkillLabel,
  softSkillIntro,
  skills = [],
  softSkills = [],
}: ISkillCardProps) => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col">
        <h1 className="mb-2 text-4xl font-bold leading-none tracking-tigh md:text-4xl lg:text-4xl">
          Technical Skills
        </h1>
        <h2 className="mb-5 text-sm">{techSkillIntro}</h2>
        <div className="flex flex-row gap-5 justify-between flex-wrap">
          {skills.map((skill, index) => (
            <div
              className="flex flex-col gap-5 flex-shrink-0"
              key={`skill-group-${index}`}
            >
              <h2 className="font-semibold text-xl">{skill.groupName}</h2>
              <ul className="flex flex-col gap-2">
                {skill.items.map((item, index) => (
                  <li
                    className={`flex flex-row justify-start items-center cursor-pointer text-sm gap-2 ${item.class}`}
                    key={`${skill.groupName}-${item.name}-${index}`}
                  >
                    <span>{item.name}</span>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="mb-2 text-4xl font-bold leading-none tracking-tigh md:text-4xl lg:text-4xl">
          Soft Skills
        </h1>
        <h2 className="mb-5 text-sm">{softSkillIntro}</h2>
        <div className="flex flex-row gap-5 justify-between flex-wrap">
          {softSkills.map((skill, index) => (
            <div
              className="flex flex-col gap-5 flex-shrink-0"
              key={`skill-group-${index}`}
            >
              <ul className="flex flex-col gap-2">
                {skill.items.map((item, index) => (
                  <li
                    className="flex flex-row justify-start items-center text-sm gap-2 font-semibold"
                    key={`${item.name}-${index}`}
                  >
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
