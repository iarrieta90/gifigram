import React from "react";
import { node } from "prop-types";
import { useSelector } from "react-redux";

import { modalStateSelector } from "../../redux/modal/modal-selector";

import Navbar from "../../components/Navbar";
import AuthModal from "../../components/AuthModal";

function Main({ children }) {
  const { displayAuthModal } = useSelector(modalStateSelector);

  return (
    <>
      {displayAuthModal && (
        <section className="w-screen h-screen p-8 fixed z-20 bg-gray-900 bg-opacity-90 text-white">
          <AuthModal />
        </section>
      )}
      <Navbar />
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
