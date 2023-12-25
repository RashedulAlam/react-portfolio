"use client";
import React, { PropsWithChildren, useState } from "react";

const SlideOver = ({ children }: PropsWithChildren) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleSlideover = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer block md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={toggleSlideover}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div
        id="slideover-container"
        className={`w-full h-full fixed inset-0 ${
          !isOpened ? "invisible" : ""
        }`}
      >
        <div
          onClick={toggleSlideover}
          id="slideover-bg"
          className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-300 dark:bg-gray-400  ${
            !isOpened ? "opacity-50" : ""
          }`}
        ></div>
        <div
          onClick={toggleSlideover}
          id="slideover"
          className={`bg-white dark:bg-gray-700 w-96 h-full absolute right-0 duration-300 ease-out transition-all ${
            !isOpened ? "translate-x-full" : ""
          }`}
        >
          <div className="absolute cursor-pointer top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default SlideOver;
