import React from "react";
import { object } from "prop-types";

import Avatar from "../Avatar";

function UserCard({ user }) {
  const { username } = user;

  return (
    <>
      <div className="flex h-12 items-center justify-between px-4 text-sm">
        <div className="flex items-center">
          <Avatar height="h-8" width="w-8" />
          <p className="pl-3 font-semibold">{username}</p>
        </div>
        <button
          type="button"
          className="bg-orange-500 text-white font-semibold rounded-full h-8 w-16"
        >
          Follow
        </button>
      </div>
    </>
  );
}

UserCard.propTypes = {
  user: object.isRequired,
};

export default UserCard;
