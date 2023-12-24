import Image from "next/image";
import React from "react";

const HeroPrimaryContent = () => {
  return (
    <div className="flex flex-col justify-between gap-10 sm:flex-col md:flex-row">
      <div className="flex flex-col gap-5">
        <h1 className="font-extrabold text-5xl text-indigo-800">
          Hi! I&apos;m Rashedul
        </h1>
        <h2 className="text-sm">
          I am a Full Stack Developer. My specialization is on .NET, JavaScript
          and Cloud based technolonogies{" "}
          <a
            href="/about"
            className="hover:underline hover:underline-offset-2 text-indigo-600"
          >
            (More about me)
          </a>
          .
        </h2>
        <a
          className="shadow bg-indigo-400 hover:bg-indigo-600 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded
          flex-row flex gap-3 justify-center items-center
          w-fit"
          href="/artifacts/cv-rashedul-alam.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/profile/3.svg"
            height={20}
            width={20}
            alt="download-icon"
          />
          Download CV
        </a>
      </div>
      <div className="hidden sm:hidden md:flex lg:basis-2/3">
        <Image
          src="/profile/2.jpg"
          alt="backgroud"
          height={400}
          width={600}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroPrimaryContent;
