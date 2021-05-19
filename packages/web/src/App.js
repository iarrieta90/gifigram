import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as ROUTES from "./routes";
import { onAuthStateChanged } from "./services/auth";

import { signOut, syncSignIn } from "./redux/auth/auth-actions";

import { fetchPosts } from "./redux/posts/post-actions";
import { postTypes } from "./redux/posts/post-types";

import { fetchUsers } from "./redux/users/user-actions";
import { userTypes } from "./redux/users/user-types";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchView from "./pages/SearchView";

function App() {
  const dispatch = useDispatch();
  const { uploadImageSuccess } = useSelector((state) => state.uploader);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn());
      } else {
        dispatch(signOut());
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPosts(postTypes.ALL_POSTS));
    dispatch(fetchUsers(userTypes.ALL_USERS));
  }, [dispatch, uploadImageSuccess]);

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <ProtectedRoute>
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.SEARCH} component={SearchView} />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
