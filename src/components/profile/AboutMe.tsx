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
      <div className="flex flex-row sm:justify-center md:justify-center lg:justify-start">
        <Image
          src={photo.src}
          alt={photo.alt}
          height={400}
          width={400}
          className="rounded-lg object-cover"
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
