import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 sm:flex-col md:flex-row">
      <div className="flex flex-row flex-1 sm:justify-center md:justify-start">
        <Image
          src="/profile-pic-2.jpg"
          alt="profile-picture-of-rashedul-alam"
          height={400}
          width={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <p>
          Hi! I'm <strong>Rashedul Alam</strong>, a Full Stack Developer.I have
          been working and developing new things as a web and software developer
          for the more than 6 years.
        </p>

        <p>
          I have demonstrated working experience with programing languages like{" "}
          <strong>HTML, CSS, JavaScript, C#, Python, Java</strong> frameworks
          like{" "}
          <strong>
            React, Angular, ASP.NET Core, Django, FastAPI, TaildwindCSS
          </strong>{" "}
          databases like <strong>PostgreSQL, SQL Server, MongoDB, Redis</strong>{" "}
          other technologies like{" "}
          <strong>Docker, Kubernetes, Cloud(AWS)</strong>.
        </p>

        <p>
          When I'm not in front of the computer, you can find me kicking a{" "}
          <strong>football or playing cricket</strong>. It's not just about
          winning; it's about teamwork, having a strategy, and not giving up
          when things get tough.
        </p>
        <p>
          <strong>
            "Keep trying, even when it's hard. Passion is like a superpower, and
            sticking with it makes you excellent."
          </strong>{" "}
          This saying reminds me that loving what you do and not giving up, even
          when it's tough, is the secret to becoming really good at it.
        </p>
        <p>
          If you want someone on your team who's not only good with computers
          but also brings a lot of excitement and never-give-up attitude, let's
          chat and see what awesome things we can create together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
