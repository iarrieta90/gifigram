import api from "../../api";
import { normalizePosts } from "../../schema/post-schema";
import { getCurrentUserToken } from "../../services/auth";
import * as PostTypes from "./post-types";
import { postTypes } from "./post-types";

// FETCH POSTS

export const fetchPostsRequest = () => {
  return { type: PostTypes.FETCH_POSTS_REQUEST };
};

export const fetchPostsError = (message) => {
  return { type: PostTypes.FETCH_POSTS_ERROR, payload: message };
};

export const fetchAllPostsSuccess = ({
  type = postTypes.ALL_POSTS,
  postsByID,
  postIds,
}) => {
  return {
    type: PostTypes.FETCH_ALL_POSTS_SUCCESS,
    payload: { type: type, postsByID: postsByID, postIds: postIds },
  };
};

export const fetchOwnPostsSuccess = ({
  type = postTypes.OWN_POSTS,
  postsByID,
  postIds,
}) => {
  return {
    type: PostTypes.FETCH_OWN_POSTS_SUCCESS,
    payload: { type: type, postsByID: postsByID, postIds: postIds },
  };
};

export function fetchPosts(fetchType) {
  switch (fetchType) {
    case postTypes.ALL_POSTS:
      return fetchAllPosts();
    case postTypes.OWN_POSTS:
      return fetchOwnPosts();
    default:
      break;
  }
  return fetchAllPosts();
}

// Fetch all posts

export const fetchAllPosts = () => {
  return async function fetchPostsThunk(dispatch) {
    dispatch(fetchPostsRequest());

    try {
      const posts = await api.getAllPosts();
      if (posts.errorMessage) {
        return dispatch(fetchPostsError(posts.errorMessage));
      }

      const normalizedPosts = normalizePosts(posts.data.data);

      return dispatch(
        fetchAllPostsSuccess({
          type: postTypes.ALL_POSTS,
          postsByID: normalizedPosts.entities.posts,
          postIds: normalizedPosts.result,
        }),
      );
    } catch (error) {
      return dispatch(fetchPostsError(error.message));
    }
  };
};

// Fetch own posts

export const fetchOwnPosts = () => {
  return async function fetchOwnPostsThunk(dispatch) {
    dispatch(fetchPostsRequest());

    const token = await getCurrentUserToken();

    if (!token) {
      return dispatch(fetchPostsError("User token null"));
    }

    try {
      const posts = await api.getOwnPosts({
        Authorization: `Bearer ${token}`,
      });

      if (posts.errorMessage) {
        return dispatch(fetchPostsError(posts.errorMessage));
      }

      const normalizedPosts = normalizePosts(posts.data);

      return dispatch(
        fetchOwnPostsSuccess({
          type: postTypes.OWN_POSTS,
          postsByID: normalizedPosts.entities.posts,
          postIds: normalizedPosts.result,
        }),
      );
    } catch (error) {
      return dispatch(fetchPostsError(error.message));
    }
  };
};
