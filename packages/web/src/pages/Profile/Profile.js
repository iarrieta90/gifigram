import React from "react";
import { useSelector } from "react-redux";

import Main from "../../layout/Main";
import Avatar from "../../components/Avatar";

import { authSelector } from "../../redux/auth/auth-selector";

function Profile() {
  const { currentUser } = useSelector(authSelector);
  return (
    <Main>
      <div className="flex justify-center items-center">
        <Avatar height="h-28" width="w-28" />
        <div className="flex flex-col ml-5">
          <p className="text-2xl font-semibold text-gray-700 ">
            {currentUser.username}
          </p>
          <div className="flex mt-4 capitalize">
            <p className="mr-2 ">{currentUser.firstName}</p>
            <p>{currentUser.lastName}</p>
          </div>
        </div>
      </div>
      <hr className="my-8" />
    </Main>
  );
}

export default Profile;
