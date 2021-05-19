import React from "react";
import { useSelector } from "react-redux";

import Main from "../../layout/Main";
import Post from "../../components/Post";
import UserCard from "../../components/UserCard";

function Home() {
  const { postsByID } = useSelector((state) => state?.posts);
  const { ALL_POSTS } = useSelector((state) => state?.posts?.postIds);

  const { usersByID } = useSelector((state) => state?.users);
  const { ALL_USERS } = useSelector((state) => state?.users?.userIds);

  return (
    <Main>
      <div className="flex w-full">
        <section className="w-full md:w-2/3">
          {ALL_POSTS?.map((post) => (
            <Post key={postsByID[post]._id} post={postsByID[post]} />
          ))}
        </section>
        <section className="w-1/3 ml-4 md:ml-12 hidden lg:flex flex-col">
          <p className="font-semibold text-gray-500 mb-3">Suggested contacts</p>
          <div className="flex flex-col">
            {ALL_USERS?.slice(0, 6).map((user) => (
              <UserCard key={usersByID[user]._id} user={usersByID[user]} />
            ))}
          </div>
        </section>
      </div>
    </Main>
  );
}

export default Home;
