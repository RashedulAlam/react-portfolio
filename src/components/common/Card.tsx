import React from "react";
import Image from "next/image";

export interface ICardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  roles: string[];
  titleImage: string;
  client: string;
  notableContributions: string[];
  tags: string[];
  onClick?: (id: string) => void;
}

const Card = ({
  id,
  description,
  title,
  tags,
  titleImage,
  onClick,
}: ICardProps) => {
  return (
    <div
      className="rounded-lg bg-white shadow-lg p-7 text-center sm:max-w-sm sm:p-4 cursor-pointer w-80"
      onClick={() => onClick && onClick(id)}
    >
      <Image
        src={titleImage}
        alt="project product image"
        className="rounded-lg sm:w-full object-cover sm:h-52"
        height={400}
        width={400}
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-gray-800 capitalize text-xl font-bold py-4">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex flex-row justify-center gap-2">
          {tags.map((tag, index) => (
            <p
              key={`project-tag-${index}`}
              className="rounded-lg font-semibold text-sm"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
