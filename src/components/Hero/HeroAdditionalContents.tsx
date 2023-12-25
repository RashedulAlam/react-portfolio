"use client";
import React from "react";
import Card from "../common/Card";
import { useRouter } from "next/navigation";
import Social, { ISocialItem } from "../profile/Social";

export interface IHeroAdditionalProps {
  projectsLabel: string;
  projects: any[];
  socialNetworks: ISocialItem[];
}

const HeroAdditionalContents = ({
  projects,
  projectsLabel,
  socialNetworks,
}: IHeroAdditionalProps) => {
  const router = useRouter();

  const onClickHandler = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col">
        <h1 className="mb-10 text-4xl font-bold leading-none tracking-tigh md:text-4xl lg:text-4xl dark:text-white">
          {projectsLabel}
        </h1>
        <div className="flex flex-col align-middle justify-between">
          <div className="flex flex-row gap-10 flex-wrap justify-between items-center">
            {projects.map((project, i) => (
              <Card key={i} {...project} onClick={onClickHandler} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <a
            className="
          shadow bg-indigo-600 hover:bg-indigo-800 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded"
            href="/projects"
          >
            More Projects
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Social items={socialNetworks} />
      </div>
    </div>
  );
};

export default HeroAdditionalContents;
