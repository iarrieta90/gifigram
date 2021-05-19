import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import {
//   faCloudUploadAlt,
//   faPlusCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { modalStateSelector } from "../../redux/modal/modal-selector";
import { signOut } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selector";
import { showAuthModal } from "../../redux/modal/modal-actions";

import * as ROUTES from "../../routes";

import Avatar from "../../components/Avatar";
// import SongCard from "../../components/SongCard";
// import PlaylistCard from "../../components/PlayListCard";
import UserCard from "../../components/UserCard";
// import UploadButton from "../../components/UploadButton";
// import Player from "../../components/Player";
// import PlaylistModal from "../../components/PlaylistModal";
// import SongModal from "../../components/SongModal";
// import DeleteModal from "../../components/DeleteModal";
// import PlaylistDeleteModal from "../../components/PlaylistDeleteModal";

// const addSong = <FontAwesomeIcon title="Upload song" icon={faCloudUploadAlt} />;
// const addPlaylist = (
//   <FontAwesomeIcon title="Create playlist" icon={faPlusCircle} />
// );

import Post from "../../components/Post";

const SearchView = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector(authSelector);

  function handleSignOut() {
    dispatch(signOut());
    setToggleUserMenu((prevVal) => !prevVal);
  }

  const { postsByID } = useSelector((state) => state.posts);
  const { usersByID } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState({ ...postsByID });
  const foundPosts = [];
  for (const index in posts) {
    if (index && search !== "") {
      if (postsByID[index].title.toLowerCase().includes(search.toLowerCase())) {
        foundPosts.push(postsByID[index]);
      }
    }
  }

  const [users, setUsers] = useState({ ...usersByID });
  const foundUsers = [];
  for (const index in users) {
    if (index && search !== "" && index !== "undefined") {
      if (
        usersByID[index]?.username
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        usersByID[index]?.firstName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        usersByID[index]?.lastName.toLowerCase().includes(search.toLowerCase())
      ) {
        foundUsers.push(usersByID[index]);
      }
    }
  }

  const inputRef = useRef(null);
  useEffect(() => inputRef.current && inputRef.current.focus());

  return (
    <>
      <nav className="bg-gray-800 text-blue-100">
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
                  <div className="rounded-full overflow-hidden flex">
                    <input
                      type="text"
                      className="px-4 py-2 h-8 w-full border-0 focus:outline-none text-black"
                      placeholder="Search..."
                      ref={inputRef}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                      className="flex items-center justify-center px-4 bg-white border-none focus:outline-none"
                      type="button"
                    >
                      <svg
                        className="h-4 w-4 text-grey-dark"
                        fill="#000"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* AVATAR */}
            {isAuthenticated ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 ">
                  <div className="flex items-center">
                    <Avatar height="h-8" width="w-8" />
                    <Link to={ROUTES.PROFILE} className="ml-4">
                      <span>{currentUser?.username}</span>
                    </Link>
                    <button
                      type="button"
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none outline-none"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setToggleUserMenu((prevVal) => !prevVal)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {toggleUserMenu && (
                    <div
                      className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <Link
                        to={ROUTES.PROFILE}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Profile
                      </Link>
                      <button
                        type="button"
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="bg-orange-500 w-28 h-10 rounded-full text-white font-semibold z-10"
                onClick={() => dispatch(showAuthModal())}
              >
                Log in
              </button>
            )}
          </div>
        </div>
        {isNavbarOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="rounded-full overflow-hidden flex">
                <input
                  type="text"
                  className="px-4 py-2 h-8 w-full border-0 focus:outline-none text-black"
                  placeholder="Search..."
                />
                <button
                  className="flex items-center justify-center px-4 bg-white border-none focus:outline-none"
                  type="button"
                >
                  <svg
                    className="h-4 w-4 text-grey-dark"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {search === "" ? (
        <div className="container my-24 mx-auto px-4 md:px-12">
          <h1 className="text-5xl">Search For Something...</h1>
        </div>
      ) : (
        <div className="container mb-24 my-12 mx-auto px-4 md:px-12">
          <article className="pb-10">
            <h2 className="pb-2 font-semibold text-gray-800 text-xl">Posts</h2>
            <hr className="border-gray-400 pb-2 mb-5" />
            <section className="flex flex-wrap justify-center sm:justify-start mx-1 lg:mx-4">
              {foundPosts.length === 0
                ? "No posts found with this search query"
                : foundPosts?.map((post) => (
                    <Post key={post._id} post={post} />
                  ))}
            </section>
          </article>
          <article className="pb-10">
            <h2 className="pb-2 font-semibold text-gray-800 text-xl">User</h2>
            <hr className="border-gray-400 pb-2 mb-5" />
            <section className="flex flex-wrap justify-center sm:justify-start mx-1 lg:mx-4">
              {foundUsers.length === 0
                ? "No artists found with this search query"
                : foundUsers?.map((user) => (
                    <UserCard key={user._id} user={user} />
                  ))}
            </section>
          </article>
        </div>
      )}
    </>
  );
};

export default SearchView;
