import React from "react";

import CloseBtn from "../CloseBtn";

function AuthModal() {
  return (
    <article className="md:w-3/6 md:mx-auto left-0 right-0 bg-dark mt-20 rounded-md">
      <CloseBtn />
      <div>
        <h2 className="text-center text-white text-xl font-semibold">Log in</h2>
        <form className="flex flex-col px-10 sm:px-20 py-10">
          <input type="text" className="" />
        </form>
      </div>
    </article>
  );
}

export default AuthModal;
