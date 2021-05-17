import * as UserTypes from "./user-types";

export const UserInitState = {
  usersLoading: false,
  usersLoadingError: null,
  usersByID: {},
  userIds: {
    ALL_USERS: [],
    FOLLOWERS: [],
    FOLLOWING: [],
    POPULAR: [],
  },
};

const UserReducer = (state = UserInitState, action) => {
  switch (action.type) {
    case UserTypes.FETCH_USERS_REQUEST: {
      return {
        ...state,
        usersLoading: true,
        usersLoadingError: null,
      };
    }
    case UserTypes.FETCH_USERS_ERROR: {
      return {
        ...state,
        usersLoading: false,
        usersLoadingError: action.payload,
      };
    }
    case UserTypes.FETCH_USERS_SUCCESS: {
      const actionType = action.payload.type;
      const newIds = { ...state.userIds };
      newIds[actionType] = [...action.payload.userIds];

      return {
        ...state,
        usersLoading: false,
        usersLoadingError: null,
        usersByID: {
          ...state.usersByID,
          ...action.payload.usersByID,
        },
        userIds: newIds,
      };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
