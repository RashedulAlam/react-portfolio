import React from "react";

export interface ICardProps {
  title: string;
  description: string;
  techStack: string[];
  roles: string[];
  images: string[];
  client: string;
  notableContributions: string[];
}

const Card = ({
  client,
  description,
  images,
  notableContributions,
  roles,
  techStack,
  title,
}: ICardProps) => {
  return (
    <div className="rounded-lg bg-white shadow-sm p-7 text-center sm:max-w-sm sm:p-4 sm:pb-12">
      <img
        src="https://images.unsplash.com/photo-1611175281047-6c2c125a938a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        alt="Ice Cave"
        className="rounded-lg sm:w-full object-cover sm:h-52"
      />
      <div>
        <h2 className="text-gray-800 capitalize text-xl font-bold pt-8 pb-4">
          {title}
        </h2>
        <p>{description}</p>
        <button className="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
