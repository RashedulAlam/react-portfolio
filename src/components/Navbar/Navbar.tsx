"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface INavItem {
  label: string;
  url: string;
}

export interface INavbarProps {
  navItems: INavItem[];
  heroEmail: string;
}

const Navbar = ({ navItems = [], heroEmail }: INavbarProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const toogleMobileMenu = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <header>
      <nav
        className="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-5
         md:py-5
         px-4
         text-lg"
      >
        <a
          href="/"
          className="cursor-pointer
              rounded-md 
              text-3xl
              uppercase
              hover: underline-offset-4
              hover:underline
              "
        >
          <Image
            src="/profile/1.png"
            height={20}
            width={100}
            alt="logo"
            className="object-fill"
          />
        </a>

        <div className="flex flex-row md:hidden">
          <a
            className="
          shadow bg-indigo-400 hover:bg-indigo-600 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded"
            href={heroEmail}
          >
            Hire Me
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toogleMobileMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpened ? "" : " hidden "
          }`}
          id="menu"
        >
          <ul
            className="
             pt-4
             text-base
             md:flex
             md:justify-between 
             md:pt-0"
          >
            {navItems.map((item, index) => (
              <li key={`nav-bar-item-${index}`}>
                <a
                  className="
                  block text-left text-lg font-bold
                  sm:mx-4 sm:py-2
                  hover:underline
                  hover:underline-offset-8
                  decoration-2
                  hover:text-indigo-600
                  "
                  href={item.url}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden flex-row md:flex">
          <a
            className="
          shadow bg-indigo-600 hover:bg-indigo-800 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded"
            href={heroEmail}
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
