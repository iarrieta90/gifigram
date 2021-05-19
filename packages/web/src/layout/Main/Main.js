import React, { useState } from "react";
import { node } from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { showUploadModal } from "../../redux/modal/modal-actions";
import { modalStateSelector } from "../../redux/modal/modal-selector";

import Navbar from "../../components/Navbar";
import AuthModal from "../../components/AuthModal";
import UploadModal from "../../components/UploadModal";

function Main({ children }) {
  const { displayAuthModal, displayUploadModal } =
    useSelector(modalStateSelector);
  const upload = <FontAwesomeIcon icon={faPlus} />;
  const [showText, setShowText] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      {displayAuthModal && (
        <section className="w-screen h-screen p-8 fixed z-20 bg-gray-900 bg-opacity-90 text-white">
          <AuthModal />
        </section>
      )}
      {displayUploadModal && (
        <section className="w-screen h-screen p-8 fixed z-20 bg-gray-900 bg-opacity-90 text-white">
          <UploadModal />
        </section>
      )}
      <button
        type="button"
        className={
          showText
            ? "fixed z-10 top-20 left-5 bg-orange-500 h-10 w-48 rounded-full text-white text-xl font-semibold"
            : "fixed z-10 top-20 left-5 bg-orange-500 h-10 w-10 rounded-full text-white text-2xl"
        }
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        onClick={() => dispatch(showUploadModal())}
      >
        {showText ? (
          <div className="flex mx-3">
            <i className="mr-3 text-2xl">{upload}</i>
            <p>Upload GIF</p>
          </div>
        ) : (
          <i>{upload}</i>
        )}
      </button>

      <Navbar />
      <section className="md:container md:mx-auto p-8 pt-24 pb-16">
        {children}
      </section>
    </>
  );
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
