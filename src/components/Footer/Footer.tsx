import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xs">
        © 2023
        <a
          href="/about"
          target="__blank"
          className="font-medium lowercase hover:underline ml-1 duration-500"
        >
          Rashedul Alam
        </a>
      </div>
    </div>
  );
};

export default Footer;
