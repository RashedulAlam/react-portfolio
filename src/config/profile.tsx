import { IProfileProps } from "@/components/profile/Profile";
import { ITimeline } from "@/components/common/Timeline";

export const PROFILE: IProfileProps = {
  aboutMe: {
    photo: {
      src: "/profile-pic-2.jpg",
      alt: "profile-picture-of-rashedul-alam",
    },
    descriptions: [
      `Hi! I&apos;m <strong>Rashedul Alam</strong>, a Full Stack Developer.I
    have been working and developing new things as a software
    developer for the more than 6 years. I am specialized on .NET and JavaScript technologies.`,
      `I have demonstrated working experience with programing languages like 
      <strong>HTML, CSS, JavaScript, TypeScript, C#, Python, Java</strong> frameworks
      like 
      <strong>
        React, Angular, ASP.NET Core, Django, FastAPI, TaildwindCSS
      </strong> 
      databases like <strong>PostgreSQL, SQL Server, MongoDB, Redis</strong> 
      other technologies like 
      <strong>Docker, Kubernetes, Cloud(AWS), Git, GitLab, CI/CD, SCRUM, Agile </strong> etc.`,
      `When I&apos;m not in front of the computer, you can find me kicking a 
      <strong>football or playing cricket</strong>. It&apos;s not just about
      winning; it&apos;s about teamwork, having a strategy, and not giving
      up when things get tough.`,
      `<strong>
      &ldquo;Keep trying, even when it&apos;s hard. Passion is like a
      superpower, and sticking with it makes you excellent.&ldquo;
    </strong>
    This saying reminds me that loving what you do and not giving up, even
    when it&apos;s tough, is the secret to becoming really good at it.`,
      `If you want someone on your team who&apos;s not only good but also brings a lot of excitement and never-give-up
    attitude, let&apos;s chat and see what awesome things we can create
    together!`,
    ],
  },
  workHistories: [
    {
      title: "Senior Software Engineer",
      period: "Dec, 2021 - Nov 2023",
      company: {
        name: "Nifty Coders Ltd.",
        website: "https://niftycoders.com/",
        location: "Dhaka, Bangladesh",
        type: "Hybrid",
        contract: "Full Time",
      },
    },
    {
      title: "Software Engineer",
      period: "Jun, 2017 - Nov 2021",
      company: {
        name: "Streams Tech Ltd.",
        website: "https://streamstech.com/",
        location: "Dhaka, Bangladesh",
        type: "Hybrid",
        contract: "Full Time",
      },
    },
    {
      title: "Intern Software Engineer",
      period: "Jan, 2016 - Jun 2016",
      company: {
        name: "Streams Tech Ltd.",
        website: "https://streamstech.com/",
        location: "Dhaka, Bangladesh",
        type: "On Site",
        contract: "Full Time",
      },
    },
  ] as ITimeline[],
  socialNetworks : [
    {
      logoSrc: "/social/linkedin.svg",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/ralam0529/",
    },
    {
      logoSrc: "/social/git.svg",
      title: "GitHub",
      url: "https://github.com/RashedulAlam",
    },
    {
      logoSrc: "/social/stackoverflow.svg",
      title: "StackOverflow",
      url: "https://stackoverflow.com/users/5192323/rashedul-alam",
    },
  ]
};
