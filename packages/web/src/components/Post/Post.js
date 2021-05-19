import React from "react";

import {
  faHeart as farHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "../Avatar";
import defaultGif from "../../assets/img/placeholder-gif.gif";

function Post() {
  const likeOff = <FontAwesomeIcon icon={farHeart} />;
  const comment = <FontAwesomeIcon icon={faComment} />;
  const share = <FontAwesomeIcon icon={faPaperPlane} />;
  const menu = <FontAwesomeIcon icon={faEllipsisH} />;
  return (
    <article className="bg-gray-200 w-2/6">
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex items-center">
          <Avatar height="h-8" width="w-8" />
          <p className="pl-3">username</p>
        </div>
        <i>{menu}</i>
      </div>
      <div>
        <img src={defaultGif} alt="gif" />
      </div>
      <div className="px-4 pt-1 pb-3">
        <div className="pb-1 text-gray-600">
          <i className="pr-3 text-xl">{likeOff}</i>
          <i className="pr-3 text-xl">{comment}</i>
          <i className="pr-3 text-xl">{share}</i>
        </div>
        <p className="font-thin">
          <span className="font-semibold pr-3">username</span>
          post title
        </p>
      </div>
    </article>
  );
}

export default Post;
