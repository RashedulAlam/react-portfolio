import React from "react";
import * as ProjectDetail from "@/components/project/ProjectDetails";
import { PROJECTS } from "@/config/projects";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const project = PROJECTS.find((x) => x.id == params?.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {project && <ProjectDetail.default {...project} />}
    </main>
  );
};

export default ProjectDetails;
