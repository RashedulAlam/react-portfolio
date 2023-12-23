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
      <div className="flex flex-row gap-10 justify-between">
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
      <div className="flex flex-row justify-between gap-20">
        <div className="flex flex-col basis-1/2">
          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              Client
            </h2>
            <ul className="leading-loose">
              <li className="font-general-regular">Name: World Bank</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              Tools & Technologies
            </h2>
            <div>
              ASP.NET Core, EF Core, Angular, SQL Server, PostgreSQL, SQLite,
              MongoDB, Docker, Kubernetes, Hangfire, RabbitMQ, Redis, AWS, Unit
              Test, BDD Test, Identity Server 4, GitLab, CI/CD, Jira, Scrum,
              Agile, Jesmine, Karma
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/2">
          <h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            Project Description
          </h2>
          <div>
            GeoDASH is an integrated mapping platform developed on an open
            source OGC compliant map server application, called GeoServer, with
            a related Content Management Service (CMS) built on the open source
            GeoNode platform. The platform is integrated into the government
            infrastructure and is also available for public use. The system has
            been redesigned and its functionalities upgraded for optimization
            and better performance; to meet the requirements of the
            organizations, which actively use the platform for storing their GIS
            data as well as sharing information. Features: Create custom and
            stylish maps using single or multiple layers, Role management,
            Interoperability capabilities, Import and export layer data, modify
            metadata, Integrated Map Tools (e.g. Routing, BBOX search and so
            on), Coordinate view, elevation, address and reverse geocoding,
            Print maps with data and base maps, Map analytics (e.g. map loads,
            pan, zoom, etc.)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
