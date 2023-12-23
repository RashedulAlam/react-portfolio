import React from "react";
import * as ProjectDetail from "@/components/project/ProjectDetails";
import { PROJECTS } from "@/config/projects";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const project = PROJECTS.find((x) => x.id == params?.id);

  return <div>{project && <ProjectDetail.default {...project} />}</div>;
};

export default ProjectDetails;
