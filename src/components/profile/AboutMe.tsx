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
    <div className="flex flex-row flex-wrap gap-10 sm:flex-col md:flex-row">
      <div className="flex flex-row flex-1 sm:justify-center md:justify-start">
        <Image
          src={photo.src}
          alt={photo.alt}
          height={400}
          width={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-1 gap-5">
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
