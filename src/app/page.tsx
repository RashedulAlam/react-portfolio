import Hero, { IHeroProps } from "@/components/Hero/Hero";
import { HERO_SUMMARY } from "@/config/hero";
import { PROJECTS } from "@/config/projects";
import { SKILLS, SKILL_CONFIG, SOFT_SKILLS } from "@/config/skills";
import { SOCIAL_NETWORKS } from "@/config/socialNetworks";

export default function Home() {
  const props: IHeroProps = {
    primary: HERO_SUMMARY,
    secondary: {
      projects: PROJECTS.slice(0, 3),
      projectsLabel: "Projects",
      socialNetworks: SOCIAL_NETWORKS,
    },
    skills: {
      softSkillIntro: SKILL_CONFIG.softSkillIntro,
      softSkillLabel: SKILL_CONFIG.softSkillLabel,
      techSkillIntro: SKILL_CONFIG.techSkillIntro,
      techSkillLabel: SKILL_CONFIG.techSkillLabel,
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
