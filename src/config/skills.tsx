import { ISkillGroup } from "@/components/Hero/SkillCard";

export const SKILL_CONFIG = {
  techSkillIntro: `my proficiency in software development extends beyond any single programming language, demonstrating a capacity to quickly adapt to the evolving landscape of languages and technologies`,
  techSkillLabel: "Technical Skills",
  softSkillLabel: "Soft Skills",
  softSkillIntro: "",
};

export const SKILLS: ISkillGroup[] = [
  {
    groupName: "Language & Markup",
    items: [
      {
        name: "JavaScript",
        icon: `<i class="devicon-javascript-plain colored"></i>`,
        class: ``,
      },
      {
        name: "TypeScript",
        icon: `<i class="devicon-typescript-plain colored"></i>`,
        class: ``,
      },
      {
        name: "C#",
        icon: `<i class="devicon-csharp-plain-wordmark colored"></i>`,
        class: ``,
      },
      {
        name: "Python",
        icon: `<i class="devicon-python-plain colored colored"></i>`,
        class: ``,
      },
      {
        name: "HTML5",
        icon: `<i class="devicon-html5-plain-wordmark colored"></i>`,
        class: ``,
      },
      {
        name: "CSS3",
        icon: `<i class="devicon-css3-plain-wordmark colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Frameworks",
    items: [
      {
        name: "ASP.NET Core",
        icon: `<i class="devicon-dotnetcore-plain colored"></i>`,
        class: ``,
      },
      {
        name: "FastAPI",
        icon: `<i class="devicon-fastapi-plain-wordmark colored"></i>`,
        class: ``,
      },
      {
        name: "Django",
        icon: `<i class="devicon-django-plain-wordmark colored"></i>`,
        class: ``,
      },
      {
        name: "Angular",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
      {
        name: "React",
        icon: `<i class="devicon-react-original colored"></i>`,
        class: ``,
      },
      {
        name: "Next.js",
        icon: `<i class="devicon-nextjs-original colored"></i>`,
        class: ``,
      },
      {
        name: "TaildwindCSS",
        icon: `<i class="devicon-tailwindcss-plain colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Database",
    items: [
      {
        name: "SQLite",
        icon: `<i class="devicon-sqlite-plain colored"></i>`,
        class: ``,
      },
      {
        name: "PostgreSQL",
        icon: `<i class="devicon-postgresql-plain colored"></i>`,
        class: ``,
      },
      {
        name: "MS SQL Server",
        icon: `<i class="devicon-microsoftsqlserver-plain colored"></i>`,
        class: ``,
      },
      {
        name: "Redis",
        icon: `<i class="devicon-redis-plain colored"></i>`,
        class: ``,
      },
      {
        name: "MongoDB",
        icon: `<i class="devicon-mongodb-plain colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Testing",
    items: [
      {
        name: "Jasmine",
        icon: `<i class="devicon-jasmine-plain colored"></i>`,
        class: ``,
      },
      {
        name: "Karma",
        icon: `<i class="devicon-karma-plain colored"></i>`,
        class: ``,
      },
      {
        name: "Jest",
        icon: `<i class="devicon-jest-plain colored"></i>`,
        class: ``,
      },
      {
        name: "Cypress",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
      {
        name: "TDD",
        icon: ``,
        class: ``,
      },
      {
        name: "BDD",
        icon: ``,
        class: ``,
      },
      {
        name: "K6(Load Testing)",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Cloud & DevOps",
    items: [
      {
        name: "Docker",
        icon: `<i class="devicon-docker-plain colored"></i>`,
        class: ``,
      },
      {
        name: "Kubernetes",
        icon: `<i class="devicon-kubernetes-plain colored"></i>`,
        class: ``,
      },
      {
        name: "AWS",
        icon: `<i class="devicon-amazonwebservices-original colored"></i>`,
        class: ``,
      },
      {
        name: "GIT",
        icon: `<i class="devicon-git-plain colored"></i>`,
        class: ``,
      },
      {
        name: "GitLab",
        icon: `<i class="devicon-gitlab-plain colored"></i>`,
        class: ``,
      },
      {
        name: "GitHUB",
        icon: `<i class="devicon-github-original colored"></i>`,
        class: ``,
      },
      {
        name: "CI/CD",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Others",
    items: [
      {
        name: "Story Book",
        icon: `<i class="devicon-storybook-plain-wordmark colored"></i>`,
        class: ``,
      },
      {
        name: "Component Library",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
      {
        name: "SCSS",
        icon: `<i class="devicon-sass-original colored"></i>`,
        class: ``,
      },
      {
        name: "LESS",
        icon: `<i class="devicon-less-plain-wordmark colored"></i>`,
        class: ``,
      },
      {
        name: "Agile",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
      {
        name: "SCRUM",
        icon: `<i className="devicon-react-original colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Tools",
    items: [
      {
        name: "VSCode",
        icon: `<i class="devicon-vscode-plain colored"></i>`,
        class: ``,
      },
      {
        name: "Visual Studio",
        icon: `<i class="devicon-visualstudio-plain colored"></i>`,
        class: ``,
      },
      {
        name: "WebStorm",
        icon: `<i class="devicon-webstorm-plain colored"></i>`,
        class: ``,
      },
    ],
  },
  {
    groupName: "Data Science",
    items: [
      {
        name: "Pandas",
        icon: `<i class="devicon-pandas-original colored"></i>`,
        class: ``,
      },
      {
        name: "NetworkX",
        icon: `<i class="devicon-networkx-original colored"></i>`,
        class: ``,
      },
    ],
  },
];

export const SOFT_SKILLS = [
  {
    items: [
      {
        name: "Communication",
      },
      {
        name: "Problem-Solving / Critical Thinking",
      },
      {
        name: "Time Management",
      },
    ],
  },
  {
    items: [
      {
        name: "Collaboration / Teamwork",
      },
      {
        name: "Adaptability ",
      },
      {
        name: "Self-Awareness",
      },
    ],
  },
  {
    items: [
      {
        name: "Patience",
      },
      {
        name: "Open-Mindedness",
      },
    ],
  },
];
