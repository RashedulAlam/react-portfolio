import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-sm">
        © 2023
        <a
          href="/about"
          target="__blank"
          className="font-medium uppercase hover:underline ml-1 duration-500"
        >
          Rashedul Alam
        </a>
      </div>
    </div>
  );
};

export default Footer;
