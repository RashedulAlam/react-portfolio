"use client";
import React from "react";
import Card from "../common/Card";
import { PROJECTS } from "@/config/projects";
import { useRouter } from "next/navigation";

export interface IProjectsProps {
  heroEmail: string;
  linkedInProfile: string;
}

const Projects = ({ heroEmail, linkedInProfile }: IProjectsProps) => {
  const router = useRouter();

  const onClickHandler = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="mb-10 text-4xl font-bold leading-none tracking-tigh md:text-4xl lg:text-4xl dark:text-white">
          Projects
        </h1>
        <div className="text">
          This page contains some of my projects that i worked with my previous
          companies and studies. If you have a project in mind or you want more
          details on any of the projects below, please send me a DM on my{" "}
          <a
            href={heroEmail}
            className="hover:underline hover:underline-offset-2 text-indigo-600"
          >
            email
          </a>{" "}
          or{" "}
          <a
            href={linkedInProfile}
            target="_blank"
            rel="noopener"
            className="hover:underline hover:underline-offset-2 text-indigo-600"
          >
            linkedin
          </a>{" "}
          so we can discuss.
        </div>
      </div>
      <div className="flex flex-row gap-10 flex-wrap justify-between items-center">
        {PROJECTS.map((project, i) => (
          <Card key={i} {...project} onClick={onClickHandler} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
