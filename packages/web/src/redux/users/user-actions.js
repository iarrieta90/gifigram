import api from "../../api";
import { normalizeUsers } from "../../schema/user-schema";
import * as UserTypes from "./user-types";
import { userTypes } from "./user-types";

// FETCH A COLLECTION OF USERS

export const fetchUsersRequest = () => ({
  type: UserTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersError = ({ message }) => ({
  type: UserTypes.FETCH_USERS_ERROR,
  payload: message,
});

export const fetchUsersSuccess = ({
  type = userTypes.ALL_USERS,
  usersByID,
  userIds,
}) => ({
  type: UserTypes.FETCH_USERS_SUCCESS,
  payload: {
    type: type,
    usersByID: usersByID,
    userIds: userIds,
  },
});

export function fetchUsers(type) {
  switch (type) {
    case userTypes.ALL_USERS:
      return fetchAllUsers();
    case userTypes.FOLLOWERS:
      return fetchFollowerUsers();
    case userTypes.FOLLOWING:
      return fetchFollowingUsers();
    default:
      break;
  }
  return fetchAllUsers();
}

// Fetch all users

export function fetchAllUsers() {
  return async function fetchUsersThunk(dispatch) {
    dispatch(fetchUsersRequest());

    try {
      const res = await api.getUsers();

      if (res.errorMessage) {
        return dispatch(fetchUsersError(res.errorMessage));
      }

      const normalizedUsers = normalizeUsers(res.data.data);

      return dispatch(
        fetchUsersSuccess({
          type: userTypes.ALL_USERS,
          usersByID: normalizedUsers.entities.users,
          userIds: normalizedUsers.result,
        }),
      );
    } catch (err) {
      return dispatch(fetchUsersError(err.message));
    }
  };
}

// Fetch users I am following

export function fetchFollowingUsers() {}

// Fetch users I follow

export function fetchFollowerUsers() {}
