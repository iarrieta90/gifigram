import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  // AUTHENTICATION

  function signUp(headers, body) {
    return request({
      url: "/sign-up",
      requestMethod: "POST",
      headers: headers,
      body: body,
    });
  }

  function signOut(headers) {
    return request({
      url: "/sign-out",
      requestMethod: "POST",
      headers: headers,
    });
  }

  // USERS

  function getUsers(headers) {
    return request({
      url: "/users",
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
