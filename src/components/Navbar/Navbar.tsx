"use client";
import Image from "next/image";
import React from "react";
import Switcher from "../darkmode/Switcher";
import SlideOver from "../common/SlideOver";

export interface INavItem {
  label: string;
  url: string;
}

export interface INavbarProps {
  navItems: INavItem[];
  heroEmail: string;
}

const Navbar = ({ navItems = [], heroEmail }: INavbarProps) => {
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
            shadow bg-indigo-600 hover:bg-indigo-800 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded"
            href={heroEmail}
          >
            Hire Me
          </a>
        </div>
        <div
          className={`w-full md:flex md:items-center md:w-auto hidden sm:hidden `}
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
        <Switcher />
        <SlideOver>
          <ul
            className="
            mt-10
            p-10
             text-base
             flex flex-col gap-2"
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
        </SlideOver>
      </nav>
    </header>
  );
};

export default Navbar;
