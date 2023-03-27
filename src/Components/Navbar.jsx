import React, { useState } from "react";

import Logo from "../assets/Images/Logo.svg";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const navBarList = ["Product", "Features", "About", "Contact"];
  const navBarListItem = navBarList.map((item) => {
    return (
      <li key={item} onClick={() => setIsActive(!isActive)}>
        {isActive ? (
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0"
            aria-current="page"
          >
            {item}
          </a>
        ) : (
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0"
          >
            {item}
          </a>
        )}
      </li>
    );
  });

  return (
    <nav className="bg-transparent border-gray-200 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center cursor-pointer">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Crappo Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            CRAPPO
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={show ? "block w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            {navBarListItem}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
