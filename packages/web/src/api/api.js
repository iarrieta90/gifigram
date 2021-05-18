import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  // AUTHENTICATION

  function signUp(headers, options) {
    return request({
      url: "/api/sign-up",
      requestMethod: "POST",
      headers: headers,
      body: options,
    });
  }

  function signOut(headers) {
    return request({
      url: "/api/sign-out",
      requestMethod: "POST",
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
    getUsers: getUsers,
  };
}

export default makeApi();
