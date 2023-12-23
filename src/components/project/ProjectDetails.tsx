import Image from "next/image";
import React from "react";

export interface IProjectDetailsProps {
  title: string;
  description: string;
  techStack: string[];
  roles: string[];
  images: string[];
  client: string;
  detailsDescription: string;
  [key: string]: any;
}

const ProjectDetails = ({
  title,
  client,
  detailsDescription,
  images,
  techStack,
}: IProjectDetailsProps) => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <h1 className="text-left text-7xl font-bold">{title}</h1>
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
      <div className="flex flex-row gap-10 justify-between">
        {images.map((image, index) => (
          <Image
            key={`image-${index}`}
            src={image}
            alt="project image"
            height={600}
            width={400}
            className="rounded-lg"
          />
        ))}
      </div>
      <div className="flex flex-row justify-between gap-20">
        <div className="flex flex-col basis-1/2">
          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              Client
            </h2>
            <ul className="leading-loose">
              <li className="font-general-regular">Name: {client}</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              Tools & Technologies
            </h2>
            <div>{techStack}</div>
          </div>
        </div>
        <div className="flex flex-col basis-1/2">
          <h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            Project Description
          </h2>
          <div>{detailsDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
