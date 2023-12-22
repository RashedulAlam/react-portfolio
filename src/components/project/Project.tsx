import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white">
          Projects portfolio
        </h1>
      </div>
      <div className="flex flex-row align-middle justify-between">
        <div>Search Component</div>
        <div>DropDown Component</div>
      </div>
    </div>
  );
};

export default Project;
