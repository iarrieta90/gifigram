import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  // AUTHENTICATION

  function signUp(headers, body) {
    return request({
      url: "/api/sign-up",
      requestMethod: "POST",
      headers: headers,
      body: body,
    });
  }

  function signOut(headers) {
    return request({
      url: "/api/sign-out",
      requestMethod: "POST",
      headers: headers,
    });
  }

  // POSTS

  function createPost({ headers, body }) {
    return request({
      url: "/api/posts",
      requestMethod: "POST",
      headers: headers,
      body: body,
    });
  }

  function getAllPosts(headers) {
    return request({
      url: "/api/posts",
      requestMethod: "GET",
      headers: headers,
    });
  }

  // USERS

  function getUsers(headers) {
    return request({
      url: "/api/users",
      requestMethod: "GET",
      headers: headers,
    });
  }

  return {
    signUp: signUp,
    signOut: signOut,
    createPost: createPost,
    getAllPosts: getAllPosts,
    getUsers: getUsers,
  };
}

export default makeApi();
