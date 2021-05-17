import React from "react";
import { Route, Switch } from "react-router-dom";

import * as ROUTES from "./routes";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
