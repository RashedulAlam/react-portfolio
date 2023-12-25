import Projects, { IProjectsProps } from "@/components/project/Projects";
import { HERO_SUMMARY } from "@/config/hero";

export default function ProjectsPage() {
  const projectProps: IProjectsProps = {
    heroEmail: HERO_SUMMARY.email,
    linkedInProfile: HERO_SUMMARY.linkedInProfile,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Projects {...projectProps} />
    </main>
  );
}
