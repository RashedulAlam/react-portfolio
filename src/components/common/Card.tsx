import React from "react";
import Image from "next/image";

export interface ICardProps {
  title: string;
  description: string;
  techStack: string[];
  roles: string[];
  titleImage: string;
  client: string;
  notableContributions: string[];
  tags: string[];
}

const Card = ({ description, title, tags, titleImage }: ICardProps) => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-7 text-center sm:max-w-sm sm:p-4 sm:pb-12 cursor-pointer min-w-96">
      <Image
        src={titleImage}
        alt="project product image"
        className="rounded-lg sm:w-full object-cover sm:h-52"
        height={400}
        width={400}
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-gray-800 capitalize text-xl font-bold pt-8 pb-4">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex flex-row justify-center gap-2">
          {tags.map((tag, index) => (
            <p
              key={`project-tag-${index}`}
              className="rounded-lg p-5 font-semibold text-sm"
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
