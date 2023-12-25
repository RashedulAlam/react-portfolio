import Image from "next/image";
import React from "react";

export interface ISocialItem {
  logoSrc: string;
  title: string;
  url: string;
}

export interface ISocialProps {
  items: ISocialItem[];
}

const Social = ({ items = [] }: ISocialProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row align-middle justify-center">
        <h2 className="text-4xl font-bold leading-none tracking-tigh md:text-4xl lg:text-4xl dark:text-white">Follow me</h2>
      </div>
      <div className="flex flex-row gap-10 items-center justify-center">
        {items.map((item, index) => (
          <a
            key={index}
            className="rounded-lg h-24 w-24 bg-gray-200 flex flex-col justify-center items-center text-center text-xs gap-2"
            href={item.url}
            target="_blank"
          >
            <Image src={item.logoSrc} height={50} width={50} alt="logo" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
