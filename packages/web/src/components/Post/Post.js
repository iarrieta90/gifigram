import React from "react";
import { object } from "prop-types";
import { useSelector } from "react-redux";

import {
  faHeart as farHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "../Avatar";

function Post({ post }) {
  const likeOff = <FontAwesomeIcon icon={farHeart} />;
  const comment = <FontAwesomeIcon icon={faComment} />;
  const share = <FontAwesomeIcon icon={faPaperPlane} />;
  const menu = <FontAwesomeIcon icon={faEllipsisH} />;

  const { usersByID } = useSelector((state) => state?.users);

  const { title, url, authorId } = post;
  const author = usersByID[authorId].username;

  return (
    <article className="bg-gray-100 mr-4 lg:mr-12 mb-10 shadow-sm border border-gray-200 ">
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex items-center">
          <Avatar height="h-8" width="w-8" />
          <p className="pl-3">{author}</p>
        </div>
        <i>{menu}</i>
      </div>
      <div>
        <img src={url} alt="gif" />
      </div>
      <div className="px-4 pt-1 pb-3">
        <div className="pb-1 text-gray-600">
          <i className="pr-3 text-xl">{likeOff}</i>
          <i className="pr-3 text-xl">{comment}</i>
          <i className="pr-3 text-xl">{share}</i>
        </div>
        <p className="font-thin">
          <span className="font-semibold pr-3">{author}</span>
          {title}
        </p>
      </div>
    </article>
  );
}

Post.propTypes = {
  post: object.isRequired,
};

export default Post;
