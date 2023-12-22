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
              rounded-md border
            border-gray-200
              px-2.5 text-3xl
              uppercase
              transition-all duration-500"
          >
            Rashedul Alam
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
                  className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                  href={item.url}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
