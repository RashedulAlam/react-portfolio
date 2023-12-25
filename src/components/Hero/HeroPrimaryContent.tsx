import Image from "next/image";
import React from "react";

export interface IHeroSummaryProps {
  name: string;
  shortIntro: string;
  moreText: string;
  cvUrl: string;
  cvDownloadLabel: string;
  profilePicSrc: string;
}

const HeroPrimaryContent = ({
  cvDownloadLabel,
  cvUrl,
  moreText,
  name,
  shortIntro,
  profilePicSrc,
}: IHeroSummaryProps) => {
  return (
    <div className="flex flex-col justify-between gap-10 sm:flex-col md:flex-row">
      <div
        className="
        flex flex-col justify-between 
        gap-10
        items-center
        md:flex-row
        lg:gap-44
        "
      >
        <Image
          src={profilePicSrc}
          alt={"photo.alt"}
          height={300}
          width={300}
          className="rounded-full flex-grow-0 m-auto object-scale-down md:rounded"
        />
        <div className="flex flex-col gap-5 justify-between items-center">
          <h1 className="font-extrabold text-5xl text-indigo-800 text-center dark:text-indigo-300">
            {name}
          </h1>
          <h2 className="text-sm text-center ">
            {shortIntro}{" "}
            <a
              href="/about"
              className="hover:underline hover:underline-offset-2 text-indigo-600 font-semibold"
            >
              {moreText}
            </a>
            .
          </h2>
          <a
            className="shadow bg-indigo-600 hover:bg-indigo-600 hover:animate-none
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded
          flex-row flex gap-3 justify-center items-center animate-bounce
          w-fit"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/profile/3.svg"
              height={20}
              width={20}
              alt="download-icon"
            />
            {cvDownloadLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPrimaryContent;
