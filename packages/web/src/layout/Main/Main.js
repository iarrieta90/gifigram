import React from "react";
import { node } from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../redux/auth/auth-actions";
import { authSelector } from "../../redux/auth/auth-selector";

import { showAuthModal } from "../../redux/modal/modal-actions";
import { modalStateSelector } from "../../redux/modal/modal-selector";

import Navbar from "../../components/Navbar";
import AuthModal from "../../components/AuthModal";

function Main({ children }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authSelector);
  const { displayAuthModal } = useSelector(modalStateSelector);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      {displayAuthModal && (
        <section className="w-screen h-screen p-8 fixed z-20 bg-gray-900 bg-opacity-90">
          <AuthModal />
        </section>
      )}
      <Navbar />
      <button
        type="button"
        className="bg-orange-500 absolute top-20 right-5 w-28 h-10 rounded-full text-white font-semibold z-10"
        onClick={
          isAuthenticated ? handleSignOut : () => dispatch(showAuthModal())
        }
      >
        {isAuthenticated ? "Sign out" : "Log in"}
      </button>
      <section className="md:container md:mx-auto p-8 pt-24 mb-16">
        {children}
      </section>
    </>
  );
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
