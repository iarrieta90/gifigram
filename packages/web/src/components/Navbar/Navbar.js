import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { authSelector } from "../../redux/auth/auth-selector";

import * as ROUTES from "../../routes";

import SearchBar from "../SearchBar";
import Avatar from "../Avatar";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  //   const { currentUser } = useSelector(authSelector);

  return (
    <>
      <nav className="bg-gray-800 text-blue-100 fixed z-10 w-screen">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsNavbarOpen((prevVal) => !prevVal)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <h4 className="font-bold mr-5">GIFIGRAM</h4>
                </Link>
              </div>
              <div className="hidden sm:block m-auto">
                <div className="flex space-x-4">
                  <Link to={ROUTES.SEARCH}>
                    <SearchBar />
                  </Link>
                </div>
              </div>
            </div>
            {/* AVATAR */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 ">
                <div className="flex items-center">
                  <Avatar height="h-8" width="w-8" />
                  <Link to={ROUTES.PROFILE} className="ml-4">
                    {/* <span>{currentUser?.username}</span> */}
                    <span>Username</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isNavbarOpen ? (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <SearchBar />
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Navbar;
