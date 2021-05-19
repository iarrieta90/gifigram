import React from "react";
import { useSelector } from "react-redux";

import Main from "../../layout/Main";
import Post from "../../components/Post";

function Home() {
  const { postsByID } = useSelector((state) => state?.posts);
  const { ALL_POSTS } = useSelector((state) => state?.posts?.postIds);

  return (
    <Main>
      {ALL_POSTS?.map((post) => (
        <Post key={postsByID[post]._id} post={postsByID[post]} />
      ))}
    </Main>
  );
}

export default Home;
