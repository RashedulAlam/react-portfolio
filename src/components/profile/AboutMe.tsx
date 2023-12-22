import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row flex-1">
        <Image
          src="/profile-pic-2.jpg"
          alt="profile-picture-of-rashedul-alam"
          height={400}
          width={400}
          className="rounded-lg w-96 h-auto"
        />
      </div>
      <div className="flex flex-row flex-1">
        NET Developer with five years of experience developing web, batch, and
        business intelligence solutions using ASP.NET, C#.NET, SharePoint, and
        MS SQL. Expertise in requirements analysis, design, development,
        testing, maintenance, enhancement, and production support of business
        applications. Certified Web Development Professional with a deep passion
        for technology, extensive technological expertise, and well-developed
        teamwork abilities.
      </div>
    </div>
  );
};

export default AboutMe;
