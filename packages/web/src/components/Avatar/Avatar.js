import React, { useState } from "react";
import { string } from "prop-types";

import defaultAvatar from "../../assets/img/no-user.png";

const Avatar = ({ height, width }) => {
  const { avatar } = useState((state) => state?.auth?.currentUser);
  return (
    <div className={`avatar ${height} ${width}`}>
      {avatar ? (
        <img src={avatar} alt="avatar" />
      ) : (
        <img src={defaultAvatar} alt="avatar" />
      )}
    </div>
  );
};

Avatar.propTypes = {
  height: string.isRequired,
  width: string.isRequired,
};

export default Avatar;
