import * as PostTypes from "./post-types";

const initialState = {
  isFetchRequest: false,
  isFetchFail: null,

  isFetchAllSuccess: false,
  isFetchOwnSuccess: false,

  postsByID: {},
  postIds: {
    ALL_POSTS: [],
    OWN_POSTS: [],
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetchRequest: true,
        isFetchFail: false,
      };
    case PostTypes.FETCH_ALL_POSTS_SUCCESS: {
      const actionType = action.payload.type;
      const newIds = { ...state.postIds };
      newIds[actionType] = [...action.payload.postIds];

      return {
        ...state,
        isFetchRequest: false,
        isFetchFail: null,
        isFetchAllSuccess: true,
        postsByID: {
          ...state.postsByID,
          ...action.payload.postsByID,
        },
        postIds: newIds,
      };
    }
    case PostTypes.FETCH_OWN_POSTS_SUCCESS: {
      const actionType = action.payload.type;
      const newIds = { ...state.postIds };
      newIds[actionType] = [...action.payload.postIds];

      return {
        ...state,
        isFetchRequest: false,
        isFetchFail: null,
        isFetchOwnSuccess: true,
        postsByID: {
          ...state.postsByID,
          ...action.payload.postsByID,
        },
        postIds: newIds,
      };
    }

    case PostTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        isFetchRequest: false,
        isFetchFail: action.payload,
      };
    case PostTypes.RESET_STATE:
      return {
        ...initialState,
      };

    default:
      return { ...state };
  }
};

export default postReducer;
