import React from "react";
import Image from "next/image";

export interface IAboutMeProps {
  photo: {
    src: string;
    alt: string;
  };
  descriptions: string[] | TrustedHTML[];
}

const AboutMe = ({ photo, descriptions = [] }: IAboutMeProps) => {
  return (
    <div className="flex flex-col gap-10 sm:flex-col md:flex-col lg:flex-row">
      <div className="flex flex-row justify-center sm:justify-center md:justify-center lg:justify-start flex-shrink-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          height={300}
          width={300}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5">
        {descriptions.map((description, index) => (
          <p
            key={`profile-descriptions-${index}`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
