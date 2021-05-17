import { makeRequest } from "./api-utils";

function makeApi(request = makeRequest()) {
  function getUsers(headers) {
    return request({
      url: "/users",
      requestMethod: "GET",
      headers: headers,
    });
  }

  return {
    getUsers: getUsers,
  };
}

export default makeApi();
