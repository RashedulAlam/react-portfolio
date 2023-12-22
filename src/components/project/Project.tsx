import React from "react";
import Card from "../common/Card";
import { PROJECTS } from "@/config/projects";

const Project = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white">
          Projects
        </h1>
        <div className="flex flex-row">
          This page contains some of my projects. If you have a project in mind
          or you want more details on any of the projects below, please send me
          a DM on my email or linkedin so we can discuss.
        </div>
      </div>
      <div className="flex flex-col align-middle justify-between">
        <div className="flex flex-row gap-10">
          {PROJECTS.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
