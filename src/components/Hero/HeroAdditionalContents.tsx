"use client";
import React from "react";
import Card from "../common/Card";
import { PROJECTS } from "@/config/projects";
import { useRouter } from "next/navigation";
import Social from "../profile/Social";
import { PROFILE } from "@/config/profile";

const HeroAdditionalContents = () => {
  const router = useRouter();

  const onClickHandler = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col">
        <h1 className="mb-10 text-4xl font-bold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white">
          Projects
        </h1>
        <div className="flex flex-col align-middle justify-between">
          <div className="flex flex-row gap-10 flex-wrap justify-between items-center">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <Card key={i} {...project} onClick={onClickHandler} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <a
            className="
          shadow bg-indigo-400 hover:bg-indigo-600 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded"
            href="/projects"
          >
            More Projects
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Social items={PROFILE.socialNetworks} />
      </div>
    </div>
  );
};

export default HeroAdditionalContents;
