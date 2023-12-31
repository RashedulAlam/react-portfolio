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
  duration: string;
  location: string;
  [key: string]: any;
}

const ProjectDetails = ({
  title,
  client,
  detailsDescription,
  images,
  techStack,
  duration,
  roles,
  location,
}: IProjectDetailsProps) => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold leading-none tracking-tigh md:text-4xl lg:text-4xl ">
          {title}
        </h1>
        <div className="flex flex-col sm:flex-col md:flex-row gap-5">
          <div className="flex items-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="ml-2 leading-none">{duration}</span>
          </div>
          <div className="flex items-start">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <span className="ml-2 leading-none">{roles.join(" / ")}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10 justify-between flex-wrap items-center sm:justify-center md:justify-between">
        {images.map((image, index) => (
          <Image
            key={`image-${index}`}
            src={image}
            alt="project image"
            height={600}
            width={300}
            className="rounded-lg"
          />
        ))}
      </div>
      <div className="flex flex-col justify-between gap-20 sm:flex-col md:flex-row">
        <div className="flex flex-col basis-1/2">
          <div className="mb-7">
            <h2 className="text-xl font-semibold mb-2 md:text-2xl">Client</h2>
            <ul className="leading-loose">
              <li className="font-general-regular">Name: {client}</li>
              <li className="font-general-regular">Location: {location}</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Tools & Technologies
            </h2>
            <div>{techStack}</div>
          </div>
        </div>
        <div className="flex flex-col basis-1/2">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Project Description
          </h2>
          <div>{detailsDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
