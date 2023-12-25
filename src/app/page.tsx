import Hero, { IHeroProps } from "@/components/Hero/Hero";
import { HERO_SUMMARY } from "@/config/hero";
import { PROJECTS } from "@/config/projects";
import { SKILLS, SOFT_SKILLS } from "@/config/skills";
import { SOCIAL_NETWORKS } from "@/config/socialNetworks";

export default function Home() {
  const props: IHeroProps = {
    primary: HERO_SUMMARY,
    secondary: {
      projects: PROJECTS.slice(0, 2),
      projectsLabel: "Projects",
      socialNetworks: SOCIAL_NETWORKS,
    },
    skills: {
      label: "",
      shortSummary: "",
      skills: SKILLS,
      softSkills: SOFT_SKILLS,
    },
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero {...props} />
    </main>
  );
}
