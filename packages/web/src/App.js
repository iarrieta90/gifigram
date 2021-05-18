import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as ROUTES from "./routes";
import { onAuthStateChanged } from "./services/auth";

import { signOut, syncSignIn } from "./redux/auth/auth-actions";

import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
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

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
