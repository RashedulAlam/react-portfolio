import React from "react";

export interface INavItem {
  label: string;
  url: string;
}

export interface INavbarProps {
  navItems: INavItem[];
}

const Navbar = ({ navItems = [] }: INavbarProps) => {
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
         text-lg text-gray-700"
      >
        <div>
          <a
            href="/about"
            className="cursor-pointer
              rounded-md 
              px-2.5 text-3xl
              uppercase
              hover: underline-offset-4
              hover:underline
              "
          >
            Logo / Text
          </a>
        </div>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
          >
            {navItems.map((item, index) => (
              <li key={`nav-bar-item-${index}`}>
                <a
                  className="
                  block text-left text-lg text-primary-dark font-bold
                  dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light
                  sm:mx-4 sm:py-2
                  hover:underline
                  hover:underline-offset-8
                  decoration-2
                  "
                  href={item.url}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row">
          <a
            className="
          shadow bg-indigo-400 hover:bg-indigo-600 
          focus:shadow-outline focus:outline-none
          text-white font-bold py-2 px-6 rounded"
          href="mailto:rashedulalam.iit.du@gmail.com"
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
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Navbar;
