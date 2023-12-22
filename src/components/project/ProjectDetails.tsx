import Image from "next/image";
import React from "react";

const ProjectDetails = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <h1 className="text-left text-7xl font-bold">Geodash</h1>
        <div className="flex flex-row">
          <div className="flex items-center mr-10">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-lg text-ternary-dark dark:text-ternary-light"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="ml-2 leading-none">Jul 26, 2021</span>
          </div>
          <div className="flex items-center">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-lg text-ternary-dark dark:text-ternary-light"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <span className="ml-2 leading-none">UI / Frontend</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-20 flex-wrap">
        <Image
          src="/geodash/1.png"
          alt="project image"
          height={600}
          width={400}
          className="rounded-lg"
        />
        <Image
          src="/geodash/2.png"
          alt="project image"
          height={400}
          width={400}
          className="rounded-lg"
        />
        <Image
          src="/geodash/3.png"
          alt="project image"
          height={400}
          width={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              Client
            </p>
            <ul className="leading-loose">
              <li className="font-general-regular">
                <span>Name: </span>
                <a
                  href="https://stoman.me"
                  className=""
                  aria-label="Project Website and Phone"
                >
                  World Bank
                </a>
              </li>
            </ul>
          </div>
          <div>Tools & Technologies</div>
        </div>
        <div className="flex flex-row">Project Description</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
