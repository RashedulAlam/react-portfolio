import React from "react";
import ProjectDetails from "@/components/project/ProjectDetails";
import { PROJECTS } from "@/config/projects";

const ProjectDetailsPage = ({ params }: { params: { id: string } }) => {
  const project = PROJECTS.find((x) => x.id == params?.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {project && <ProjectDetails {...project} />}
    </main>
  );
};

export default ProjectDetailsPage;
